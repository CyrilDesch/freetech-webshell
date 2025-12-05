<style>
    .music-container {
        min-height: 100vh;
        background-color: #0a0e27;
        padding: 2rem 1rem;
    }
    
    .music-wrapper {
        max-width: 96rem;
        width: 100%;
        margin: 0 auto;
    }
    
    .music-header {
        margin-bottom: 1.5rem;
        border: 2px solid #ff00ff;
        padding: 1rem;
        box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
    }
    
    .music-header-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.5rem;
    }
    
    .music-icon {
        color: #ff00ff;
        font-size: 2rem;
    }
    
    .music-title {
        color: #ff00ff;
        text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
        font-size: 1.5rem;
    }
    
    .music-subtitle {
        color: #00d9ff;
        font-size: 0.875rem;
    }
    
    .iframe-section {
        border: 3px solid #ff00ff;
        background-color: #000000;
        padding: 0;
        margin-bottom: 1.5rem;
        box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
    }
    
    .iframe-wrapper {
        position: relative;
        width: 100%;
        padding-bottom: 42%; /* ratio proche du screenshot */
        min-height: 500px;
        background: #000000;
    }
    
    .iframe-wrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
        background: #000000;
    }
    
    .info-box {
        border: 1px solid #00d9ff;
        padding: 1rem;
        background-color: #0f1419;
        box-shadow: 0 0 15px rgba(0, 217, 255, 0.3);
        margin-bottom: 1.5rem;
    }
    
    .info-title {
        color: #00d9ff;
        margin-bottom: 0.5rem;
    }
    
    .info-text {
        color: rgba(0, 217, 255, 0.8);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
    }
    
    .info-tech {
        color: #00ff41;
        font-size: 0.875rem;
        margin-bottom: 0.25rem;
    }
    
    .back-section {
        text-align: center;
    }
    
    .btn-back {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        border: 2px solid #00d9ff;
        background: transparent;
        color: #00d9ff;
        text-decoration: none;
        transition: all 0.3s;
        font-family: 'Courier New', monospace;
        box-shadow: 0 0 15px rgba(0, 217, 255, 0.3);
    }
    
    .btn-back:hover {
        background: #00d9ff;
        color: #0a0e27;
    }
</style>

<div class="music-container">
    <div class="music-wrapper">
        <div class="music-header">
            <div class="music-header-content">
                <span class="music-icon">🔊</span>
                <h1 class="music-title">CYBER SOUND MATRIX</h1>
            </div>
            <p class="music-subtitle">
                Visualiseur musical cyberpunk • Expérience immersive
            </p>
        </div>

        <div class="iframe-section">
            <div class="iframe-wrapper">
                <iframe 
                    src="https://music.cyrildeschamps.fr/" 
                    title="Cyber Music Visualizer"
                    allow="autoplay; microphone"
                    loading="lazy">
                </iframe>
            </div>
        </div>

        <div class="info-box">
            <h3 class="info-title">🎵 VISUALISEUR MUSICAL CYBERPUNK</h3>
            <p class="info-text">
                Expérience de visualisation audio en temps réel. Profitez d'une immersion 
                sonore et visuelle unique dans un univers cyberpunk. Le visualiseur analyse 
                les fréquences audio pour créer des animations synchronisées.
            </p>
            <p class="info-tech">
                💾 Technologie: Web Audio API • Canvas 2D • Effets temps réel
            </p>
        </div>

        <div class="back-section">
            <a href="?page=home" class="btn-back">
                <span>⚡</span>
                RETOUR AU TERMINAL
            </a>
        </div>
    </div>
</div>
