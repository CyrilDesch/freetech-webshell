(function () {
  const MUSIC_TRACKS = [
    {
      id: 'hugo',
      name: 'Matmatah - Les Moutons',
      artist: 'Matmatah',
      duration: '3:48',
      url: 'assets/audio/track-hugo.mp3',
      icon: '🐑'
    },
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
    }
  ];

  const dataUrlCache = {};

  let currentTrack = null;
  let isPlaying = false;
  let iframeReady = false;
  let isLoading = false;

  const trackList = document.getElementById('music-track-list');
  const playerEmbed = document.getElementById('music-player-embed');
  const playerTitle = document.getElementById('music-player-title');
  const musicIframe = document.getElementById('music-iframe');
  const closeBtn = document.getElementById('music-player-close');

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

  function selectTrack(track) {
    if (isLoading) {
      addTerminalLine('> Chargement en cours, veuillez patienter...', true);
      return;
    }

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

    trackList.querySelectorAll('.music-track').forEach(el => {
      el.classList.toggle('active', el.dataset.trackId === track.id);
    });

    playerEmbed.style.display = 'block';
    playerTitle.textContent = `${track.icon} ${track.name} - ${track.artist}`;

    addTerminalLine('> Chargement audio: ' + track.name, true);
    addTerminalLine('> Artiste: ' + track.artist, true);
    addTerminalLine('> Initialisation du visualiseur...', true);

    reloadIframeAndPlay(track.url);
  }

  function reloadIframeAndPlay(trackUrl) {
    const iframeSrc = musicIframe.src;

    iframeReady = false;

    musicIframe.src = '';
    setTimeout(() => {
      musicIframe.src = iframeSrc;

      const checkReady = setInterval(() => {
        if (iframeReady) {
          clearInterval(checkReady);
          sendAudioUrl(trackUrl);
        }
      }, 100);

      setTimeout(() => {
        clearInterval(checkReady);
        if (!iframeReady) {
          sendAudioUrl(trackUrl);
        }
      }, 5000);
    }, 100);
  }

  function sendToIframe(message) {
    if (musicIframe && musicIframe.contentWindow) {
      musicIframe.contentWindow.postMessage(message, '*');
    }
  }

  async function fetchAudioAsDataUrl(url) {
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

  async function sendAudioUrl(url) {
    const dataUrl = await fetchAudioAsDataUrl(url);

    if (dataUrl) {
      addTerminalLine('> Envoi au visualiseur...', true);
      sendToIframe({ type: 'setAudioUrl', url: dataUrl });
      addTerminalLine('> Audio chargé. Démarrage...', true);

      setTimeout(() => {
        startAudio();
        isLoading = false;
      }, 800);
    } else {
      isLoading = false;
    }
  }

  function startAudio() {
    sendToIframe({ type: 'startAudio' });
    isPlaying = true;
    addTerminalLine('> ▶ Lecture en cours...', true);
  }

  function stopAudio() {
    sendToIframe({ type: 'stopAudio' });
    isPlaying = false;
    addTerminalLine('> ■ Lecture arrêtée.', true);
  }

  function closePlayer() {
    stopAudio();
    playerEmbed.style.display = 'none';
    currentTrack = null;
    isLoading = false;

    trackList.querySelectorAll('.music-track').forEach(el => {
      el.classList.remove('active');
    });

    addTerminalLine('> Visualiseur fermé.', true);
  }

  function addTerminalLine(text, isCommand = false) {
    const terminalOutput = document.getElementById('terminal-output');
    if (!terminalOutput) return;

    const line = document.createElement('div');
    line.className = 'terminal-line' + (isCommand ? ' command' : '');
    line.textContent = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  window.addEventListener('message', function (event) {
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

  if (closeBtn) {
    closeBtn.addEventListener('click', closePlayer);
  }

  initTrackList();

})();

