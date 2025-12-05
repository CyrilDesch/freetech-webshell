<link rel="stylesheet" href="assets/css/game.css">

<div class="game-container">
    <div class="game-wrapper" id="selection-screen">
        <div class="game-header">
            <div class="game-logo">🚀</div>
            <h1 class="game-title">LIBERATION ARCADE</h1>
            <p class="game-subtitle">
                Éliminez les GAFAM et technologies propriétaires vague après vague !
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
                <h2>🎯 SYSTEME</h2>
                <p>📦 Munitions limitées (30)</p>
                <p>🌊 Vagues infinies</p>
                <p>💎 Power-ups: Munitions & Bouclier</p>
                <p>⚡ Difficulté progressive</p>
            </div>
        </div>

        <div class="ship-selection">
            <h2>CHOISISSEZ VOTRE VAISSEAU OPEN SOURCE</h2>
            <div class="ship-grid">
                <div class="ship-card" style="border-color: #00d9ff" onclick="startGame('fedora', '🎩', '#00d9ff', 8)">
                    <div class="ship-icon">🎩</div>
                    <div class="ship-name" style="color: #00d9ff">FEDORA</div>
                    <div class="ship-speed">Vitesse: 8</div>
                </div>
                <div class="ship-card" style="border-color: #ff6600" onclick="startGame('ubuntu', '🟠', '#ff6600', 7)">
                    <div class="ship-icon">🟠</div>
                    <div class="ship-name" style="color: #ff6600">UBUNTU</div>
                    <div class="ship-speed">Vitesse: 7</div>
                </div>
                <div class="ship-card" style="border-color: #ff006e" onclick="startGame('debian', '🔴', '#ff006e', 6)">
                    <div class="ship-icon">🔴</div>
                    <div class="ship-name" style="color: #ff006e">DEBIAN</div>
                    <div class="ship-speed">Vitesse: 6</div>
                </div>
                <div class="ship-card" style="border-color: #00d9ff" onclick="startGame('arch', '⚡', '#00d9ff', 10)">
                    <div class="ship-icon">⚡</div>
                    <div class="ship-name" style="color: #00d9ff">ARCH</div>
                    <div class="ship-speed">Vitesse: 10</div>
                </div>
                <div class="ship-card" style="border-color: #ff0000" onclick="startGame('freebsd', '😈', '#ff0000', 7)">
                    <div class="ship-icon">😈</div>
                    <div class="ship-name" style="color: #ff0000">FreeBSD</div>
                    <div class="ship-speed">Vitesse: 7</div>
                </div>
                <div class="ship-card" style="border-color: #ffff00" onclick="startGame('linux', '🐧', '#ffff00', 8)">
                    <div class="ship-icon">🐧</div>
                    <div class="ship-name" style="color: #ffff00">LINUX</div>
                    <div class="ship-speed">Vitesse: 8</div>
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
            <canvas id="game-canvas" width="800" height="600"></canvas>
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
</div>

<script src="assets/js/game-config.js"></script>
<script src="assets/js/game-state.js"></script>
<script src="assets/js/game-logic.js"></script>
<script src="assets/js/game-render.js"></script>
<script src="assets/js/game-loop.js"></script>
