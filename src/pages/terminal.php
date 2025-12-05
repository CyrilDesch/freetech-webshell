<link rel="stylesheet" href="assets/css/terminal.css">

<div class="terminal-container">
    <div class="terminal-layout">
        <!-- Terminal Section -->
        <div class="terminal-wrapper">
            <div class="terminal-box">
                <div class="terminal-header">
                    <span class="terminal-icon">⚡</span>
                    <div>
                        <h2 class="terminal-title">TERMINAL FREEDOM.OS</h2>
                        <p class="terminal-subtitle">Système de libération numérique v3.14.159</p>
                    </div>
                </div>

                <!-- Music Player Embed (hidden by default) -->
                <div class="music-player-embed" id="music-player-embed" style="display: none;">
                    <div class="music-player-header">
                        <span class="music-player-icon">🎵</span>
                        <span class="music-player-title" id="music-player-title">CYBER SOUND MATRIX</span>
                        <button class="music-player-close" id="music-player-close" title="Fermer">✕</button>
                    </div>
                    <div class="music-player-iframe-wrapper">
                        <iframe 
                            id="music-iframe"
                            src="https://music.cyrildeschamps.fr/" 
                            title="Cyber Music Visualizer"
                            allow="autoplay; microphone"
                            loading="lazy">
                        </iframe>
                    </div>
                </div>

                <div class="terminal-output" id="terminal-output">
                    <div class="terminal-line command">> Initializing FREEDOM.OS v3.14.159...</div>
                    <div class="terminal-line command">> Loading open-source modules...</div>
                    <div class="terminal-line command">> Scanning for proprietary malware... [NONE DETECTED]</div>
                    <div class="terminal-line command">> Establishing secure connection...</div>
                    <div class="terminal-line command">> Welcome to the resistance.</div>
                    <div class="terminal-line"></div>
                    <div class="terminal-line">
╔═══════════════════════════════════════════════════════════╗
║  ███████╗██████╗ ███████╗███████╗    ████████╗██╗  ██╗  ║
║  ██╔════╝██╔══██╗██╔════╝██╔════╝    ╚══██╔══╝██║  ██║  ║
║  █████╗  ██████╔╝█████╗  █████╗         ██║   ███████║  ║
║  ██╔══╝  ██╔══██╗██╔══╝  ██╔══╝         ██║   ██╔══██║  ║
║  ██║     ██║  ██║███████╗███████╗       ██║   ██║  ██║  ║
║  ╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝       ╚═╝   ╚═╝  ╚═╝  ║
║                                                           ║
║        LIBEREZ-VOUS DES CHAINES PROPRIETAIRES            ║
╚═══════════════════════════════════════════════════════════╝
                    </div>
                    <div class="terminal-line"></div>
                    <div class="terminal-line">Tapez "help" pour voir les commandes disponibles.</div>
                    <div class="terminal-line"></div>
                </div>

                <div class="terminal-input-wrapper">
                    <span class="user">user@freetech</span>
                    <span class="dir">~</span>
                    <span style="color: #00ff41;">$</span>
                    <input 
                        type="text" 
                        class="terminal-input" 
                        id="command-input" 
                        placeholder="Tapez une commande..."
                        autocomplete="off"
                        autofocus
                    >
                </div>
            </div>

            <div class="feature-grid">
                <div class="feature-box green">
                    <div class="feature-icon">💻</div>
                    <p>Open Source</p>
                </div>
                <div class="feature-box cyan">
                    <div class="feature-icon">🛡️</div>
                    <p>Sécurité</p>
                </div>
                <div class="feature-box magenta">
                    <div class="feature-icon">⚡</div>
                    <p>Liberté</p>
                </div>
                <div class="feature-box yellow">
                    <div class="feature-icon">🎮</div>
                    <p>Contrôle</p>
                </div>
            </div>
        </div>

        <!-- Music Selection Panel -->
        <div class="music-panel">
            <div class="music-panel-header">
                <span class="music-panel-icon">🎧</span>
                <h3 class="music-panel-title">SOUND MATRIX</h3>
            </div>
            <p class="music-panel-subtitle">Sélectionnez une piste audio</p>
            
            <div class="music-track-list" id="music-track-list">
                <!-- Tracks will be populated by JS -->
            </div>

            <div class="music-panel-info">
                <p class="music-panel-tip">💡 Cliquez sur une piste pour lancer le visualiseur</p>
            </div>
        </div>
    </div>
</div>

<script src="assets/js/terminal-data.js"></script>
<script src="assets/js/terminal.js"></script>
<script src="assets/js/music-player.js"></script>
