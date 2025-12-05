// Music Player Controller for Terminal
(function () {
  // Music tracks library - using local files
  const MUSIC_TRACKS = [
    {
      id: 'meow-carless-whisper',
      name: 'Meow Carless Whisper',
      artist: 'Meow Carless',
      duration: '1:00',
      url: 'assets/audio/track-0.mp3',
      icon: '🐱'
    },
    {
      id: 'cyberpunk-drive',
      name: 'Cyberpunk Drive',
      artist: 'Neon Resistance',
      duration: '4:32',
      url: 'assets/audio/track-1.mp3',
      icon: '🌃'
    },
    {
      id: 'digital-freedom',
      name: 'Digital Freedom',
      artist: 'Open Source Beats',
      duration: '3:45',
      url: 'assets/audio/track-2.mp3',
      icon: '🔓'
    },
    {
      id: 'neon-matrix',
      name: 'Neon Matrix',
      artist: 'Hack The Planet',
      duration: '5:12',
      url: 'assets/audio/track-3.mp3',
      icon: '💜'
    },
    {
      id: 'resistance-anthem',
      name: 'Resistance Anthem',
      artist: 'Free Tech Collective',
      duration: '4:08',
      url: 'assets/audio/track-4.mp3',
      icon: '✊'
    },
    {
      id: 'encrypted-vibes',
      name: 'Encrypted Vibes',
      artist: 'Crypto Synth',
      duration: '3:56',
      url: 'assets/audio/track-5.mp3',
      icon: '🔐'
    },
    {
      id: 'terminal-dreams',
      name: 'Terminal Dreams',
      artist: 'Shell Script',
      duration: '4:45',
      url: 'assets/audio/track-6.mp3',
      icon: '⌨️'
    },
    {
      id: 'firewall-break',
      name: 'Firewall Break',
      artist: 'Zero Day',
      duration: '3:28',
      url: 'assets/audio/track-7.mp3',
      icon: '🔥'
    },
    {
      id: 'open-protocol',
      name: 'Open Protocol',
      artist: 'TCP/IP Underground',
      duration: '5:33',
      url: 'assets/audio/track-8.mp3',
      icon: '🌐'
    }
  ];

  // Cache for data URLs to avoid re-fetching
  const dataUrlCache = {};

  // State
  let currentTrack = null;
  let isPlaying = false;
  let iframeReady = false;
  let isLoading = false;

  // DOM Elements
  const trackList = document.getElementById('music-track-list');
  const playerEmbed = document.getElementById('music-player-embed');
  const playerTitle = document.getElementById('music-player-title');
  const musicIframe = document.getElementById('music-iframe');
  const closeBtn = document.getElementById('music-player-close');

  // Initialize track list
  function initTrackList() {
    if (!trackList) return;

    trackList.innerHTML = MUSIC_TRACKS.map(track => `
            <div class="music-track" data-track-id="${track.id}">
                <span class="music-track-icon">${track.icon}</span>
                <div class="music-track-info">
                    <div class="music-track-name">${track.name}</div>
                    <div class="music-track-artist">${track.artist}</div>
                </div>
                <span class="music-track-duration">${track.duration}</span>
            </div>
        `).join('');

    // Add click listeners
    trackList.querySelectorAll('.music-track').forEach(el => {
      el.addEventListener('click', () => {
        const trackId = el.dataset.trackId;
        const track = MUSIC_TRACKS.find(t => t.id === trackId);
        if (track) {
          selectTrack(track);
        }
      });
    });
  }

  // Select and play a track
  function selectTrack(track) {
    // Prevent rapid clicks while loading
    if (isLoading) {
      addTerminalLine('> Chargement en cours, veuillez patienter...', true);
      return;
    }

    // If same track, just toggle play/pause
    if (currentTrack && currentTrack.id === track.id) {
      if (isPlaying) {
        stopAudio();
      } else {
        startAudio();
      }
      return;
    }

    currentTrack = track;
    isLoading = true;

    // Update active state in list
    trackList.querySelectorAll('.music-track').forEach(el => {
      el.classList.toggle('active', el.dataset.trackId === track.id);
    });

    // Show player
    playerEmbed.style.display = 'block';
    playerTitle.textContent = `${track.icon} ${track.name} - ${track.artist}`;

    // Add terminal output
    addTerminalLine('> Chargement audio: ' + track.name, true);
    addTerminalLine('> Artiste: ' + track.artist, true);
    addTerminalLine('> Initialisation du visualiseur...', true);

    // Reload iframe to reset AudioContext (prevents "already connected" error)
    reloadIframeAndPlay(track.url);
  }

  // Reload iframe and play track
  function reloadIframeAndPlay(trackUrl) {
    // Store the iframe src
    const iframeSrc = musicIframe.src;

    // Reset iframe ready state
    iframeReady = false;

    // Reload iframe by resetting src
    musicIframe.src = '';
    setTimeout(() => {
      musicIframe.src = iframeSrc;

      // Wait for iframe to be ready, then send audio
      const checkReady = setInterval(() => {
        if (iframeReady) {
          clearInterval(checkReady);
          sendAudioUrl(trackUrl);
        }
      }, 100);

      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkReady);
        if (!iframeReady) {
          // Try anyway
          sendAudioUrl(trackUrl);
        }
      }, 5000);
    }, 100);
  }

  // Send message to iframe
  function sendToIframe(message) {
    if (musicIframe && musicIframe.contentWindow) {
      musicIframe.contentWindow.postMessage(message, '*');
    }
  }

  // Fetch audio file and convert to data URL for cross-origin iframe
  async function fetchAudioAsDataUrl(url) {
    // Check cache first
    if (dataUrlCache[url]) {
      addTerminalLine('> Utilisation du cache audio...', true);
      return dataUrlCache[url];
    }

    try {
      addTerminalLine('> Téléchargement du fichier audio...', true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const blob = await response.blob();

      // Convert blob to data URL (base64) which works cross-origin
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const dataUrl = reader.result;
          dataUrlCache[url] = dataUrl;
          resolve(dataUrl);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Error fetching audio:', error);
      addTerminalLine('> ERREUR: Impossible de charger le fichier audio (' + error.message + ')', true);
      isLoading = false;
      return null;
    }
  }

  // Send audio URL to iframe
  async function sendAudioUrl(url) {
    // Fetch the audio and convert to data URL (base64)
    const dataUrl = await fetchAudioAsDataUrl(url);

    if (dataUrl) {
      addTerminalLine('> Envoi au visualiseur...', true);
      sendToIframe({ type: 'setAudioUrl', url: dataUrl });
      addTerminalLine('> Audio chargé. Démarrage...', true);

      // Auto-start after setting URL
      setTimeout(() => {
        startAudio();
        isLoading = false;
      }, 800);
    } else {
      isLoading = false;
    }
  }

  // Start audio playback
  function startAudio() {
    sendToIframe({ type: 'startAudio' });
    isPlaying = true;
    addTerminalLine('> ▶ Lecture en cours...', true);
  }

  // Stop audio playback
  function stopAudio() {
    sendToIframe({ type: 'stopAudio' });
    isPlaying = false;
    addTerminalLine('> ■ Lecture arrêtée.', true);
  }

  // Close player
  function closePlayer() {
    stopAudio();
    playerEmbed.style.display = 'none';
    currentTrack = null;
    isLoading = false;

    // Remove active state
    trackList.querySelectorAll('.music-track').forEach(el => {
      el.classList.remove('active');
    });

    addTerminalLine('> Visualiseur fermé.', true);
  }

  // Add line to terminal output
  function addTerminalLine(text, isCommand = false) {
    const terminalOutput = document.getElementById('terminal-output');
    if (!terminalOutput) return;

    const line = document.createElement('div');
    line.className = 'terminal-line' + (isCommand ? ' command' : '');
    line.textContent = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  // Listen for messages from iframe
  window.addEventListener('message', function (event) {
    // Handle iframe messages
    if (event.data) {
      switch (event.data.type) {
        case 'ready':
          iframeReady = true;
          console.log('Music iframe ready');
          break;
        case 'audioUrlSet':
          console.log('Audio URL set');
          break;
        case 'audioStarted':
          isPlaying = true;
          break;
        case 'audioStopped':
          isPlaying = false;
          break;
        case 'status':
          console.log('Player status:', event.data);
          break;
      }
    }
  });

  // Event listeners
  if (closeBtn) {
    closeBtn.addEventListener('click', closePlayer);
  }

  // Initialize
  initTrackList();

})();

