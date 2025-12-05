// Music Visualizer Logic
let audioFile = null;
let isPlaying = false;
let audioContext = null;
let analyser = null;
let animationId = null;

const audioUpload = document.getElementById('audio-upload');
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const playIcon = document.getElementById('play-icon');
const playText = document.getElementById('play-text');
const fileName = document.getElementById('file-name');
const controls = document.getElementById('controls');
const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');
const waitingMessage = document.getElementById('waiting-message');
const asciiOverlay = document.getElementById('ascii-overlay');

audioUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('audio/')) {
        audioFile = file;
        fileName.textContent = 'Fichier: ' + file.name;
        audioPlayer.src = URL.createObjectURL(file);
        controls.style.display = 'flex';
        waitingMessage.style.display = 'none';
    }
});

playBtn.addEventListener('click', function() {
    if (!audioFile) return;
    
    if (!audioContext) {
        setupAudioContext();
    }
    
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        playIcon.textContent = '▶';
        playText.textContent = 'PLAY';
        asciiOverlay.style.display = 'none';
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    } else {
        audioPlayer.play();
        isPlaying = true;
        playIcon.textContent = '⏸';
        playText.textContent = 'PAUSE';
        asciiOverlay.style.display = 'block';
        drawVisualizer();
    }
});

audioPlayer.addEventListener('ended', function() {
    isPlaying = false;
    playIcon.textContent = '▶';
    playText.textContent = 'PLAY';
    asciiOverlay.style.display = 'none';
});

function setupAudioContext() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    
    const source = audioContext.createMediaElementSource(audioPlayer);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
}

function drawVisualizer() {
    if (!analyser) return;
    
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);
    
    // Clear canvas with fade effect
    ctx.fillStyle = 'rgba(10, 14, 39, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const barWidth = canvas.width / bufferLength * 2.5;
    let x = 0;
    
    // Draw frequency bars
    for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height * 0.8;
        
        // Cyberpunk gradient colors
        const colors = [
            `rgba(0, 255, 65, ${dataArray[i] / 255})`,   // green
            `rgba(0, 217, 255, ${dataArray[i] / 255})`,  // cyan
            `rgba(255, 0, 255, ${dataArray[i] / 255})`,  // magenta
            `rgba(255, 0, 110, ${dataArray[i] / 255})`   // pink
        ];
        
        const colorIndex = Math.floor((i / bufferLength) * colors.length);
        ctx.fillStyle = colors[colorIndex];
        
        // Main bar
        ctx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);
        
        // Glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = colors[colorIndex];
        ctx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);
        ctx.shadowBlur = 0;
        
        // Mirror effect
        ctx.globalAlpha = 0.3;
        ctx.fillRect(x, 0, barWidth - 2, barHeight / 2);
        ctx.globalAlpha = 1;
        
        x += barWidth;
    }
    
    // Draw ASCII grid overlay
    ctx.strokeStyle = 'rgba(0, 255, 65, 0.1)';
    ctx.lineWidth = 1;
    const gridSize = 20;
    
    for (let i = 0; i < canvas.width; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    
    for (let i = 0; i < canvas.height; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }
    
    // Draw glitch particles
    if (Math.random() > 0.95) {
        const particleX = Math.random() * canvas.width;
        const particleY = Math.random() * canvas.height;
        ctx.fillStyle = '#00ff41';
        ctx.fillRect(particleX, particleY, 2, 2);
    }
    
    animationId = requestAnimationFrame(drawVisualizer);
}

// Draw initial waiting state
ctx.fillStyle = '#0a0e27';
ctx.fillRect(0, 0, canvas.width, canvas.height);
