
function startGameLoop() {
    const keys = {};
    
    document.addEventListener('keydown', (e) => {
        keys[e.key] = true;
        if (e.key === ' ') {
            e.preventDefault();
            shoot();
        }
        if (e.key.toLowerCase() === 'r') {
            reload();
        }
    });
    
    document.addEventListener('keyup', (e) => {
        keys[e.key] = false;
    });
    
    function update() {
        if (gameState !== 'playing') return;
        
        const now = Date.now();
        if (enemySpawnQueue.length > 0 && now - lastSpawnTime > SPAWN_INTERVAL) {
            const enemyToSpawn = enemySpawnQueue.shift();
            enemies.push(enemyToSpawn);
            lastSpawnTime = now;
        }
        
        const speed = selectedShip.speed;
        if (keys['ArrowLeft'] && playerX > 0) {
            playerX -= speed;
        }
        if (keys['ArrowRight'] && playerX < CANVAS_WIDTH - PLAYER_SIZE) {
            playerX += speed;
        }
        
        bullets = bullets.filter(b => {
            b.y -= BULLET_SPEED;
            return b.y > 0;
        });
        
        powerUps = powerUps.filter(p => {
            p.y += 2;
            
            if (p.x > playerX - 20 && p.x < playerX + PLAYER_SIZE + 20 &&
                p.y > playerY - 20 && p.y < playerY + PLAYER_SIZE + 20) {
                if (p.type === 'ammo') {
                    maxAmmo += 10;
                    ammo += 20;
                } else if (p.type === 'shield') {
                    hasShield = true;
                    setTimeout(() => { hasShield = false; }, 10000);
                }
                return false;
            }
            
            return p.y < CANVAS_HEIGHT;
        });
        
        bullets = bullets.filter(bullet => {
            for (let enemy of enemies) {
                if (enemy.alive && 
                    bullet.x > enemy.x && bullet.x < enemy.x + ENEMY_WIDTH &&
                    bullet.y > enemy.y && bullet.y < enemy.y + ENEMY_HEIGHT) {
                    enemy.alive = false;
                    score += enemy.points;
                    
                    if (Math.random() > 0.7) {
                        const type = Math.random() > 0.5 ? 'ammo' : 'shield';
                        powerUps.push({ x: enemy.x + ENEMY_WIDTH / 2, y: enemy.y, type });
                    }
                    
                    return false;
                }
            }
            return true;
        });
        const aliveEnemies = enemies.filter(e => e.alive);
        for (let enemy of enemies) {
            if (enemy.alive) {
                enemy.time++;
                
                enemy.y += enemy.verticalSpeed;
                
                const oscillation = Math.sin(enemy.time * enemy.oscillationFreq + enemy.oscillationPhase) * enemy.oscillationAmp;
                enemy.x += enemy.horizontalSpeed;
                
                const prevOscillation = Math.sin((enemy.time - 1) * enemy.oscillationFreq + enemy.oscillationPhase) * enemy.oscillationAmp;
                enemy.x += (oscillation - prevOscillation) * 0.1;
                
                if (enemy.x <= 0) {
                    enemy.x = 0;
                    enemy.horizontalSpeed = Math.abs(enemy.horizontalSpeed);
                } else if (enemy.x + ENEMY_WIDTH >= CANVAS_WIDTH) {
                    enemy.x = CANVAS_WIDTH - ENEMY_WIDTH;
                    enemy.horizontalSpeed = -Math.abs(enemy.horizontalSpeed);
                }
                
                if (enemy.y + ENEMY_HEIGHT >= CANVAS_HEIGHT) {
                    gameOver();
                    return;
                }
            }
        }
        
        if (!waveTransitioning && enemySpawnQueue.length === 0 && enemies.length > 0 && enemies.every(e => !e.alive)) {
            waveTransitioning = true;
            
            if (wave >= requiredWaves) {
                setTimeout(() => {
                    gameVictory();
                }, 500);
                return;
            }
            
            wave++;
            ammo = Math.min(ammo + 15, maxAmmo);
            setTimeout(() => {
                createWave(wave);
                waveTransitioning = false;
            }, 1000);
        }
        
        updateHUD();
        
        draw();
        
        gameLoop = requestAnimationFrame(update);
    }
    
    update();
}
