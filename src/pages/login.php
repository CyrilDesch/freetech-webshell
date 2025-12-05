<link rel="stylesheet" href="assets/css/game/game.css">

<div class="game-container">
    <div class="game-wrapper" id="selection-screen">
        <div class="game-header">
            <h1 class="game-title">⚡ LIBERATION ARCADE ⚡</h1>
            <p class="game-quote" style="color: #00ff41; font-size: 1.3em; margin: 1.5rem 0; text-shadow: 0 0 10px #00ff41;">
                "Ce n'est qu'après avoir tout perdu qu'on est libre de tout faire"
            </p>
        </div>

        <div class="mission-objective">
            <div class="objective-title">🎯 MISSION OBJECTIVE 🎯</div>
            <div class="objective-step">1️⃣ CHOISISSEZ VOTRE DISTRIBUTION</div>
            <div class="objective-step">2️⃣ DÉTRUISEZ TOUS LES GAFAM</div>
            <div class="objective-step">3️⃣ LIBÉREZ LE TERMINAL</div>
        </div>

        <div class="ship-selection">
            <div class="ship-grid-compact">
                <div class="ship-card-compact" style="border-color: #D70A53" onclick="startGame('debian')">
                    <div class="ship-logo-text" style="color: #D70A53;">🌀</div>
                    <div class="ship-name" style="color: #D70A53">DEBIAN</div>
                    <div class="ship-stats-compact">
                        <span style="color: #00ff41">V:6</span> | 
                        <span style="color: #00ff41">5 vagues</span> | 
                        <span style="color: #ffff00">Débutant</span>
                    </div>
                </div>
                <div class="ship-card-compact" style="border-color: #E95420" onclick="startGame('ubuntu')">
                    <div class="ship-logo-text" style="color: #E95420;">🟠</div>
                    <div class="ship-name" style="color: #E95420">UBUNTU</div>
                    <div class="ship-stats-compact">
                        <span style="color: #00ff41">V:7</span> | 
                        <span style="color: #00ff41">10 vagues</span> | 
                        <span style="color: #ffff00">Facile</span>
                    </div>
                </div>
                <div class="ship-card-compact" style="border-color: #51A2DA" onclick="startGame('fedora')">
                    <div class="ship-logo-text" style="color: #51A2DA;">🎩</div>
                    <div class="ship-name" style="color: #51A2DA">FEDORA</div>
                    <div class="ship-stats-compact">
                        <span style="color: #00ff41">V:8</span> | 
                        <span style="color: #ffff00">15 vagues</span> | 
                        <span style="color: #ff6600">Moyen</span>
                    </div>
                </div>
                <div class="ship-card-compact" style="border-color: #FCC133" onclick="startGame('linux')">
                    <div class="ship-logo-text">🐧</div>
                    <div class="ship-name" style="color: #FCC133">LINUX</div>
                    <div class="ship-stats-compact">
                        <span style="color: #00ff41">V:8</span> | 
                        <span style="color: #ff6600">20 vagues</span> | 
                        <span style="color: #ff006e">Avancé</span>
                    </div>
                </div>
                <div class="ship-card-compact" style="border-color: #C20000" onclick="startGame('freebsd')">
                    <div class="ship-logo-text" style="color: #C20000;">😈</div>
                    <div class="ship-name" style="color: #C20000">FreeBSD</div>
                    <div class="ship-stats-compact">
                        <span style="color: #00ff41">V:7</span> | 
                        <span style="color: #ff006e">25 vagues</span> | 
                        <span style="color: #ff0000">Expert</span>
                    </div>
                </div>
                <div class="ship-card-compact" style="border-color: #1793D1" onclick="startGame('arch')">
                    <div class="ship-logo-text" style="color: #1793D1;">⚡</div>
                    <div class="ship-name" style="color: #1793D1">ARCH</div>
                    <div class="ship-stats-compact">
                        <span style="color: #00ff41">V:10</span> | 
                        <span style="color: #ff0000">30 vagues</span> | 
                        <span style="color: #ff0000">Extrême</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="back-btn" style="margin-top: 2rem;">
            <a href="?page=home" class="btn btn-back">
                <span>⚡</span>
                RETOUR AU TERMINAL
            </a>
        </div>
    </div>

    <div class="game-wrapper" id="loading-screen" style="display: none;">
        <div class="loading-content">
            <div class="loading-logo">⚡</div>
            <h1 class="loading-title">MISSION: LIBERATION NUMERIQUE</h1>
            <div class="loading-mission">
                <div class="mission-line">DÉTRUISEZ LES GAFAM • DÉFENDEZ LE LIBRE</div>
                <div class="mission-line" style="margin-top: 1rem; color: #00d9ff;">← → Déplacements • ESPACE Tirer • R Recharger</div>
            </div>
            <div class="loading-bar-container">
                <div class="loading-bar" id="loading-bar"></div>
            </div>
            <div class="loading-text" id="loading-text">INITIALISATION DES SYSTEMES...</div>
        </div>
    </div>

    <div class="game-wrapper" id="game-screen" style="display: none;">
        <div class="hud">
            <div class="hud-item" style="border-color: #00ff41;">
                <div class="hud-label" style="color: #00ff41;">VAISSEAU</div>
                <div class="hud-value" style="color: #00d9ff;" id="ship-display"></div>
            </div>
            <div class="hud-item" style="border-color: #ffff00;">
                <div class="hud-label" style="color: #ffff00;">SCORE</div>
                <div class="hud-value" id="score-display">0</div>
            </div>
            <div class="hud-item" style="border-color: #00d9ff;">
                <div class="hud-label" style="color: #00d9ff;">VAGUE</div>
                <div class="hud-value" id="wave-display">1</div>
            </div>
            <div class="hud-item" id="ammo-hud" style="border-color: #00ff41;">
                <div class="hud-label" style="color: #00ff41;" id="ammo-label">MUNITIONS</div>
                <div class="hud-value" id="ammo-display">30/30</div>
            </div>
            <div class="hud-item" style="border-color: #ff006e;">
                <div class="hud-label" style="color: #ff006e;">VIES <span id="shield-indicator"></span></div>
                <div class="hud-value" id="lives-display">❤️❤️❤️</div>
            </div>
        </div>

        <div class="game-canvas-wrapper">
            <canvas id="gameCanvas"></canvas>
        </div>

        <div class="game-controls">
            <div style="color: #00d9ff;">← → Déplacements</div>
            <div style="color: #00ff41;">ESPACE Tirer • R Recharger</div>
            <div style="color: #ffff00;">📦 +Munitions • 🛡️ Bouclier 10s</div>
        </div>
    </div>

    <div class="game-wrapper" id="gameover-screen" style="display: none;">
        <div class="game-over-screen">
            <div class="game-over-icon">🎯</div>
            <h1 class="game-over-title">GAME OVER</h1>
            <p class="game-over-subtitle">Les propriétaires ont gagné... cette fois</p>
            <div class="game-over-stats">
                <div class="game-over-score">SCORE FINAL: <span id="final-score">0</span></div>
                <div class="game-over-wave">VAGUES REPOUSSÉES: <span id="final-wave">0</span></div>
            </div>
            <p class="game-over-message">
                La lutte continue ! Chaque vague repoussée est une victoire pour l'open source.
            </p>
            <button class="btn btn-primary" onclick="resetGame()">
                ▶ RÉESSAYER
            </button>
        </div>
    </div>

    <div class="game-wrapper" id="victory-screen" style="display: none;">
        <div class="game-over-screen">
            <div class="game-over-icon" style="font-size: 80px;">🏆</div>
            <h1 class="game-over-title" style="color: #00ff41;">VICTOIRE !</h1>
            <p class="game-over-subtitle" style="color: #00d9ff;">Vous avez déverrouillé l'accès au terminal !</p>
            <div class="game-over-stats">
                <div class="game-over-score">DISTRIBUTION: <span id="victory-distro" style="color: #00d9ff;">-</span></div>
                <div class="game-over-wave">VAGUES BATTUES: <span id="victory-waves" style="color: #00ff41;">0</span></div>
                <div class="game-over-score">SCORE FINAL: <span id="victory-score" style="color: #ffff00;">0</span></div>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; border: 2px solid #00ff41; border-radius: 10px; background: rgba(0, 255, 65, 0.05);">
                <h2 style="color: #00ff41; margin-bottom: 20px;">🔐 AUTHENTIFICATION TERMINÉE</h2>
                <p style="color: #00d9ff; margin-bottom: 20px;">Entrez vos identifiants pour accéder au terminal</p>
                
                <form id="login-form" style="display: flex; flex-direction: column; gap: 15px; max-width: 400px; margin: 0 auto;">
                    <div style="text-align: left;">
                        <label style="color: #00ff41; display: block; margin-bottom: 5px;">Nom d'utilisateur</label>
                        <input type="text" id="username" name="username" 
                               style="width: 100%; padding: 10px; background: #0a0e27; border: 2px solid #00d9ff; color: #00ff41; font-family: 'Courier New', monospace; font-size: 16px; border-radius: 5px;"
                               placeholder="root" required>
                    </div>
                    
                    <div style="text-align: left;">
                        <label style="color: #00ff41; display: block; margin-bottom: 5px;">Mot de passe</label>
                        <input type="password" id="password" name="password" 
                               style="width: 100%; padding: 10px; background: #0a0e27; border: 2px solid #00d9ff; color: #00ff41; font-family: 'Courier New', monospace; font-size: 16px; border-radius: 5px;"
                               placeholder="********" required>
                    </div>
                    
                    <button type="submit" class="btn btn-primary" style="margin-top: 10px; padding: 12px 30px; font-size: 18px;">
                        ⚡ SE CONNECTER AU TERMINAL
                    </button>
                </form>
                
                <p style="color: #ffff00; margin-top: 15px; font-size: 14px;">
                    💡 Astuce : Les identifiants sont "root" / "toor"
                </p>
            </div>
        </div>
    </div>
</div>

<script src="assets/js/game/game-config.js"></script>
<script src="assets/js/game/game-state.js"></script>
<script src="assets/js/game/game-logic.js"></script>
<script src="assets/js/game/game-render.js"></script>
<script src="assets/js/game/game-loop.js"></script>

<script>
window.addEventListener('DOMContentLoaded', function() {
    initCanvasSize();
    window.addEventListener('resize', initCanvasSize);
    
    const hasSeenAlert = sessionStorage.getItem('ndi_event_alert_seen');
    if (!hasSeenAlert) {
        setTimeout(function() {
            alert('🎉 BIENVENUE À LA NUIT DE L\'INFO 2025! 🎉\n\n' +
                  '📢 ÉVÉNEMENT SPÉCIAL: LIBERATION ARCADE\n\n' +
                  'Mission: Combattez les GAFAM et libérez le numérique!\n\n' +
                  '🎮 Choisissez votre distribution Linux\n' +
                  '⚔️ Détruisez toutes les vagues ennemies\n' +
                  '🔓 Débloquez l\'accès au terminal NIRD\n\n' +
                  'Prouvez votre valeur et défendez le logiciel libre!\n\n' +
                  '✨ Que la force de l\'open source soit avec vous! ✨');
            sessionStorage.setItem('ndi_event_alert_seen', 'true');
        }, 500);
    }
});
</script>
