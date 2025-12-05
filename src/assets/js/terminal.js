// Terminal Logic
const commandInput = document.getElementById('command-input');
const terminalOutput = document.getElementById('terminal-output');

function addLine(text, isCommand = false) {
    const line = document.createElement('div');
    line.className = 'terminal-line' + (isCommand ? ' command' : '');
    line.textContent = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function handleCommand(cmd) {
    const command = cmd.trim().toLowerCase();
    
    addLine('> ' + cmd, true);
    addLine('');
    
    switch (command) {
        case 'help':
            addLine(COMMANDS_HELP);
            break;
        case 'nird':
            addLine(ABOUT_NIRD);
            break;
        case 'contexte':
            addLine(CONTEXTE);
            break;
        case 'piliers':
            addLine(PILIERS);
            break;
        case 'actions':
            addLine(ACTIONS);
            break;
        case 'acteurs':
            addLine(ACTEURS);
            break;
        case 'benefices':
            addLine(BENEFICES);
            break;
        case 'etapes':
            addLine(ETAPES);
            break;
        case 'ressources':
            addLine(RESSOURCES);
            break;
        case 'tools':
            addLine(TOOLS);
            break;
        case 'clear':
            terminalOutput.innerHTML = '';
            break;
        case 'matrix':
            addLine('> Chargement du visualiseur musical cyberpunk...');
            addLine('> Initialisation de la matrice sonore...');
            addLine('> Redirection en cours...');
            setTimeout(() => {
                window.location.href = '?page=music';
            }, 1000);
            break;
        case 'patrix':
        case 'login':
            addLine('> Lancement du jeu de libération arcade...');
            addLine('> Chargement des vaisseaux open source...');
            addLine('> Préparation de l\'offensive contre les GAFAM...');
            addLine('> Redirection en cours...');
            setTimeout(() => {
                window.location.href = '?page=login';
            }, 1000);
            break;
        case 'contact':
            addLine('> Ouverture du canal de communication sécurisé...');
            addLine('> Établissement de la connexion chiffrée...');
            addLine('> Redirection en cours...');
            setTimeout(() => {
                window.location.href = '?page=contact';
            }, 1000);
            break;
        case 'home':
            addLine('> Retour au terminal principal...');
            break;
        case '':
            break;
        default:
            addLine('Commande inconnue: "' + cmd + '". Tapez "help" pour voir les commandes disponibles.');
    }
    
    addLine('');
}

commandInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim()) {
        handleCommand(this.value);
        this.value = '';
    }
});

// Focus input on page load
commandInput.focus();
