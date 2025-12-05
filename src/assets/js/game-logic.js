// Game Logic Functions

function startGame(id, icon, color, speed) {
    selectedShip = { id, icon, color, speed };
    gameState = 'playing';
    playerX = CANVAS_WIDTH / 2 - PLAYER_SIZE / 2;
    
    document.getElementById('selection-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    document.getElementById('ship-display').textContent = icon + ' ' + id.toUpperCase();
    
    score = 0;
    lives = 3;
    ammo = 30;
    maxAmmo = 30;
    wave = 1;
    bullets = [];
    powerUps = [];
    hasShield = false;
    
    createWave(1);
    startGameLoop();
}

function createWave(waveNum) {
    enemies = [];
    const enemiesPerRow = Math.min(3 + Math.floor(waveNum / 4), 5);
    const rows = Math.min(2 + Math.floor(waveNum / 7), 3);
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < enemiesPerRow; col++) {
            const template = ENEMY_TEMPLATES[Math.floor(Math.random() * ENEMY_TEMPLATES.length)];
            enemies.push({
                x: 60 + col * 120,
                y: 40 + row * 80,
                name: template.name,
                logo: template.logo,
                alive: true,
                color: template.color,
                points: template.points
            });
        }
    }
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

function resetGame() {
    gameState = 'select';
    document.getElementById('gameover-screen').style.display = 'none';
    document.getElementById('selection-screen').style.display = 'block';
}
