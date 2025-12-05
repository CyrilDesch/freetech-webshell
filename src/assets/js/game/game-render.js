
function updateHUD() {
    document.getElementById('score-display').textContent = score;
    document.getElementById('wave-display').textContent = wave + '/' + requiredWaves;
    document.getElementById('ammo-display').textContent = ammo + '/' + maxAmmo;
    document.getElementById('lives-display').textContent = '❤️'.repeat(lives);
    document.getElementById('shield-indicator').textContent = hasShield ? '🛡️' : '';
    
    const ammoHud = document.getElementById('ammo-hud');
    const ammoLabel = document.getElementById('ammo-label');
    const ammoDisplay = document.getElementById('ammo-display');
    
    if (ammo <= 5) {
        ammoHud.style.borderColor = '#ff006e';
        ammoLabel.style.color = '#ff006e';
        ammoDisplay.style.color = '#ff006e';
    } else {
        ammoHud.style.borderColor = '#00ff41';
        ammoLabel.style.color = '#00ff41';
        ammoDisplay.style.color = '#00ff41';
    }
}

function draw() {
    if (!ctx || !canvas) return;
    
    ctx.fillStyle = '#0a0e27';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    ctx.strokeStyle = 'rgba(0, 255, 65, 0.05)';
    ctx.lineWidth = 1;
    for (let i = 0; i < CANVAS_WIDTH; i += 30) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, CANVAS_HEIGHT);
        ctx.stroke();
    }
    for (let i = 0; i < CANVAS_HEIGHT; i += 30) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(CANVAS_WIDTH, i);
        ctx.stroke();
    }
    
    ctx.font = '40px monospace';
    ctx.fillStyle = selectedShip.color;
    
    if (hasShield) {
        ctx.strokeStyle = '#00d9ff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(playerX + PLAYER_SIZE / 2, playerY + 20, 30, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    ctx.fillText(selectedShip.icon, playerX, playerY + 30);
    
    enemies.forEach(enemy => {
        if (enemy.alive) {
            ctx.fillStyle = enemy.color;
            
            ctx.font = 'bold 8px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(enemy.name, enemy.x + ENEMY_WIDTH / 2, enemy.y - 2);
            
            ctx.font = 'bold 28px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(enemy.logo, enemy.x + ENEMY_WIDTH / 2, enemy.y + 28);
            
            ctx.textAlign = 'left';
            
            ctx.strokeStyle = enemy.color;
            ctx.lineWidth = 1;
            ctx.strokeRect(enemy.x - 2, enemy.y - 2, ENEMY_WIDTH + 4, ENEMY_HEIGHT + 4);
        }
    });
    
    ctx.fillStyle = '#00ff41';
    bullets.forEach(bullet => {
        ctx.fillRect(bullet.x - 2, bullet.y, 4, 15);
    });
    
    ctx.font = '16px monospace';
    powerUps.forEach(p => {
        ctx.fillText(p.type === 'ammo' ? '📦' : '🛡️', p.x, p.y);
    });
    
    if (isReloading) {
        ctx.fillStyle = 'rgba(255, 255, 0, 0.3)';
        ctx.fillRect(0, CANVAS_HEIGHT - 5, CANVAS_WIDTH, 5);
        ctx.fillStyle = '#ffff00';
        const progress = (Date.now() % RELOAD_TIME) / RELOAD_TIME;
        ctx.fillRect(0, CANVAS_HEIGHT - 5, CANVAS_WIDTH * progress, 5);
    }
}
