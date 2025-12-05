<link rel="stylesheet" href="assets/css/game.css">

<div class="game-container">
    <div class="game-wrapper" id="selection-screen">
        <div class="game-header">
            <div class="game-logo">🚀</div>
            <h1 class="game-title">LIBERATION ARCADE</h1>
            <p class="game-subtitle">
                Éliminez les GAFAM vague après vague pour accéder au terminal !<br>
                <span style="color: #00d9ff; font-size: 0.9em;">Chaque vague = un groupe d'ennemis à détruire</span>
            </p>
            <div class="game-badge">⚡ SPACE INVADERS OPEN SOURCE ⚡</div>
        </div>

        <div class="info-grid">
            <div class="info-box cyan">
                <h2>🎮 COMMANDES</h2>
                <p>← → Déplacements</p>
                <p>ESPACE Tirer</p>
                <p>R Recharger</p>
            </div>

            <div class="info-box magenta">
                <h2>🎯 OBJECTIF</h2>
                <p>💎 Une VAGUE = un groupe d'ennemis GAFAM</p>
                <p>🏆 Battez toutes les vagues pour déverrouiller le terminal</p>
                <p>✨ Power-ups: 📦 Munitions • 🛡️ Bouclier</p>
                <p>⚡ Plus la difficulté est élevée, plus il y a de vagues !</p>
            </div>
        </div>

        <div class="ship-selection">
            <h2>CHOISISSEZ VOTRE DISTRIBUTION</h2>
            <p style="color: #00d9ff; margin-bottom: 20px;">La difficulté détermine le nombre de vagues à battre pour accéder au terminal</p>
            <div class="ship-grid">
                <div class="ship-card" style="border-color: #ff006e" onclick="startGame('debian')">
                    <div class="ship-icon">🔴</div>
                    <div class="ship-name" style="color: #ff006e">DEBIAN</div>
                    <div class="ship-speed">Vitesse: 6</div>
                    <div class="ship-speed" style="color: #00ff41">Vagues: 5 | Stable</div>
                </div>
                <div class="ship-card" style="border-color: #ff6600" onclick="startGame('ubuntu')">
                    <div class="ship-icon">🟠</div>
                    <div class="ship-name" style="color: #ff6600">UBUNTU</div>
                    <div class="ship-speed">Vitesse: 7</div>
                    <div class="ship-speed" style="color: #00ff41">Vagues: 10 | Facile</div>
                </div>
                <div class="ship-card" style="border-color: #00d9ff" onclick="startGame('fedora')">
                    <div class="ship-icon">🎩</div>
                    <div class="ship-name" style="color: #00d9ff">FEDORA</div>
                    <div class="ship-speed">Vitesse: 8</div>
                    <div class="ship-speed" style="color: #ffff00">Vagues: 15 | Intermédiaire</div>
                </div>
                <div class="ship-card" style="border-color: #ffff00" onclick="startGame('linux')">
                    <div class="ship-icon">🐧</div>
                    <div class="ship-name" style="color: #ffff00">LINUX</div>
                    <div class="ship-speed">Vitesse: 8</div>
                    <div class="ship-speed" style="color: #ffff00">Vagues: 20 | Avancé</div>
                </div>
                <div class="ship-card" style="border-color: #ff0000" onclick="startGame('freebsd')">
                    <div class="ship-icon">😈</div>
                    <div class="ship-name" style="color: #ff0000">FreeBSD</div>
                    <div class="ship-speed">Vitesse: 7</div>
                    <div class="ship-speed" style="color: #ff006e">Vagues: 25 | Expert</div>
                </div>
                <div class="ship-card" style="border-color: #00d9ff" onclick="startGame('arch')">
                    <div class="ship-icon">⚡</div>
                    <div class="ship-name" style="color: #00d9ff">ARCH</div>
                    <div class="ship-speed">Vitesse: 10</div>
                    <div class="ship-speed" style="color: #ff006e">Vagues: 30 | Extrême</div>
                </div>
            </div>
        </div>

        <div class="game-footer">
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━<br>
            "Libérez le numérique, une vague à la fois"<br>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        </div>

        <div class="back-btn">
            <a href="?page=home" class="btn btn-back">
                <span>⚡</span>
                RETOUR AU TERMINAL
            </a>
        </div>
    </div>

    <!-- Game Screen (hidden initially) -->
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
            <canvas id="game-canvas" width="700" height="500"></canvas>
        </div>

        <div class="game-controls">
            <div style="color: #00d9ff;">← → Déplacements</div>
            <div style="color: #00ff41;">ESPACE Tirer • R Recharger</div>
            <div style="color: #ffff00;">📦 +Munitions • 🛡️ Bouclier 10s</div>
        </div>
    </div>

    <!-- Game Over Screen (hidden initially) -->
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

    <!-- Victory Screen with Login Form (hidden initially) -->
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

<script src="assets/js/game-config.js"></script>
<script src="assets/js/game-state.js"></script>
<script src="assets/js/game-logic.js"></script>
<script src="assets/js/game-render.js"></script>
<script src="assets/js/game-loop.js"></script>
