
function startGame(distroId) {
    selectedDistro = DISTRIBUTIONS[distroId];
    selectedShip = {
        id: distroId,
        icon: selectedDistro.icon,
        color: selectedDistro.color,
        speed: selectedDistro.speed
    };
    requiredWaves = selectedDistro.difficulty;
    
    document.getElementById('selection-screen').style.display = 'none';
    document.getElementById('loading-screen').style.display = 'block';
    
    const loadingBar = document.getElementById('loading-bar');
    const loadingText = document.getElementById('loading-text');
    const loadingMessages = [
        'INITIALISATION DES SYSTEMES...',
        'CHARGEMENT DES ARMES OPEN SOURCE...',
        'SCAN DES CIBLES GAFAM...',
        'CALIBRATION DU VAISSEAU ' + selectedDistro.name + '...',
        'PREPARATION DE L\'OFFENSIVE...',
        'LANCEMENT DE LA MISSION !'
    ];
    
    let progress = 0;
    let messageIndex = 0;
    
    const loadingInterval = setInterval(() => {
        progress += 2;
        loadingBar.style.width = progress + '%';
        
        if (progress % 20 === 0 && messageIndex < loadingMessages.length) {
            loadingText.textContent = loadingMessages[messageIndex];
            messageIndex++;
        }
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                document.getElementById('loading-screen').style.display = 'none';
                document.getElementById('game-screen').style.display = 'block';
                initializeGame();
            }, 500);
        }
    }, 50);
}

function initializeGame() {
    if (!initGameCanvas()) {
        console.error('Canvas not found!');
        return;
    }
    
    initCanvasSize();
    
    gameState = 'playing';
    playerX = CANVAS_WIDTH / 2 - PLAYER_SIZE / 2;
    playerY = CANVAS_HEIGHT - PLAYER_SIZE - 20;
    
    document.getElementById('ship-display').textContent = selectedShip.icon + ' ' + selectedDistro.name;
    
    score = 0;
    lives = 3;
    ammo = 30;
    maxAmmo = 30;
    wave = 1;
    bullets = [];
    powerUps = [];
    hasShield = false;
    waveTransitioning = false;
    
    createWave(1);
    startGameLoop();
}

function createWave(waveNum) {
    enemies = [];
    enemySpawnQueue = [];
    const enemiesPerRow = Math.min(4 + Math.floor(waveNum / 3), 8);
    const rows = Math.min(2 + Math.floor(waveNum / 5), 4);
    
    const tempQueue = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < enemiesPerRow; col++) {
            const template = ENEMY_TEMPLATES[Math.floor(Math.random() * ENEMY_TEMPLATES.length)];
            const xPos = 50 + Math.random() * (CANVAS_WIDTH - 100);
            
            const baseSpeed = 0.5 + (waveNum * 0.1);
            const vertSpeed = baseSpeed * (0.5 + Math.random() * 1.0); // Entre 50% et 150%
            
            const horizSpeed = (Math.random() - 0.5) * 2; // Entre -1 et 1
            
            const oscillationAmplitude = 20 + Math.random() * 40; // Amplitude entre 20 et 60
            const oscillationFrequency = 0.02 + Math.random() * 0.04; // Fréquence aléatoire
            const oscillationPhase = Math.random() * Math.PI * 2; // Phase initiale aléatoire
            
            tempQueue.push({
                x: xPos,
                y: -ENEMY_HEIGHT - Math.random() * 100, // Spawn au-dessus de l'écran
                name: template.name,
                logo: template.logo,
                alive: true,
                color: template.color,
                points: template.points,
                verticalSpeed: vertSpeed,
                horizontalSpeed: horizSpeed,
                oscillationAmp: oscillationAmplitude,
                oscillationFreq: oscillationFrequency,
                oscillationPhase: oscillationPhase,
                time: 0 // Compteur de temps pour l'oscillation
            });
        }
    }
    
    for (let i = tempQueue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempQueue[i], tempQueue[j]] = [tempQueue[j], tempQueue[i]];
    }
    
    enemySpawnQueue = tempQueue;
    lastSpawnTime = Date.now();
}

function shoot() {
    const now = Date.now();
    if (now - lastShotTime < SHOT_COOLDOWN) return;
    if (ammo <= 0 || isReloading) return;
    
    bullets.push({ x: playerX + PLAYER_SIZE / 2, y: playerY });
    ammo--;
    lastShotTime = now;
}

function reload() {
    if (isReloading || ammo === maxAmmo) return;
    
    isReloading = true;
    document.getElementById('ammo-label').textContent = 'MUNITIONS (RECHARGE...)';
    
    setTimeout(() => {
        ammo = maxAmmo;
        isReloading = false;
        document.getElementById('ammo-label').textContent = 'MUNITIONS';
    }, RELOAD_TIME);
}

function gameOver() {
    gameState = 'gameover';
    cancelAnimationFrame(gameLoop);
    
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('gameover-screen').style.display = 'block';
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-wave').textContent = wave - 1;
}

function gameVictory() {
    gameState = 'victory';
    cancelAnimationFrame(gameLoop);
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('victory-screen').style.display = 'block';
    document.getElementById('victory-score').textContent = score;
    document.getElementById('victory-distro').textContent = selectedDistro.name;
    document.getElementById('victory-waves').textContent = requiredWaves;
    sessionStorage.setItem('distro', selectedDistro.name);
    sessionStorage.setItem('score', score);
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === 'root' && password === 'toor') {
            sessionStorage.setItem('terminalAccess', 'granted');
            window.location.href = '?page=terminal';
        } else {
            alert('❌ Identifiants incorrects ! Essayez root/toor');
        }
    });
}

function resetGame() {
    gameState = 'select';
    document.getElementById('gameover-screen').style.display = 'none';
    document.getElementById('selection-screen').style.display = 'block';
}
