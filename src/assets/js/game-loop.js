// Game Loop and Controls

function startGameLoop() {
    // Keyboard controls
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
        
        // Move player
        const speed = selectedShip.speed;
        if (keys['ArrowLeft'] && playerX > 0) {
            playerX -= speed;
        }
        if (keys['ArrowRight'] && playerX < CANVAS_WIDTH - PLAYER_SIZE) {
            playerX += speed;
        }
        
        // Move bullets
        bullets = bullets.filter(b => {
            b.y -= BULLET_SPEED;
            return b.y > 0;
        });
        
        // Move power-ups
        powerUps = powerUps.filter(p => {
            p.y += 2;
            
            // Check collection
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
        
        // Check bullet-enemy collisions
        bullets = bullets.filter(bullet => {
            for (let enemy of enemies) {
                if (enemy.alive && 
                    bullet.x > enemy.x && bullet.x < enemy.x + ENEMY_WIDTH &&
                    bullet.y > enemy.y && bullet.y < enemy.y + ENEMY_HEIGHT) {
                    enemy.alive = false;
                    score += enemy.points;
                    
                    // Spawn power-up
                    if (Math.random() > 0.7) {
                        const type = Math.random() > 0.5 ? 'ammo' : 'shield';
                        powerUps.push({ x: enemy.x + ENEMY_WIDTH / 2, y: enemy.y, type });
                    }
                    
                    return false;
                }
            }
            return true;
        });
        
        // Check if wave cleared
        if (enemies.every(e => !e.alive)) {
            wave++;
            ammo = Math.min(ammo + 15, maxAmmo);
            setTimeout(() => {
                createWave(wave);
                enemyDirection = 1;
            }, 1000);
        }
        
        // Move enemies
        let shouldMoveDown = false;
        const aliveEnemies = enemies.filter(e => e.alive);
        
        if (aliveEnemies.length > 0) {
            const leftmost = Math.min(...aliveEnemies.map(e => e.x));
            const rightmost = Math.max(...aliveEnemies.map(e => e.x + ENEMY_WIDTH));
            
            if (rightmost >= CANVAS_WIDTH - 10 && enemyDirection === 1) {
                enemyDirection = -1;
                shouldMoveDown = true;
            } else if (leftmost <= 10 && enemyDirection === -1) {
                enemyDirection = 1;
                shouldMoveDown = true;
            }
        }
        
        const enemySpeed = 0.3 + Math.floor(wave / 6) * 0.3;
        enemies.forEach(enemy => {
            enemy.x += enemyDirection * enemySpeed;
            if (shouldMoveDown) enemy.y += 20;
        });
        
        // Check if enemies reached player
        if (aliveEnemies.some(e => e.y + ENEMY_HEIGHT > playerY - 10)) {
            if (hasShield) {
                hasShield = false;
                enemies.forEach(e => e.y -= 100);
            } else {
                lives--;
                if (lives <= 0) {
                    gameOver();
                } else {
                    enemies.forEach(e => e.y = Math.max(40, e.y - 150));
                }
            }
        }
        
        // Update HUD
        updateHUD();
        
        // Draw
        draw();
        
        gameLoop = requestAnimationFrame(update);
    }
    
    update();
}
