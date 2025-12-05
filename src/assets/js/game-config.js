// Game Configuration
const ENEMY_TEMPLATES = [
    { name: 'WINDOWS', logo: ['╔═══╗', '║▐█▌║', '║█▄█║', '╚═══╝'], color: '#00d9ff', points: 100 },
    { name: 'APPLE', logo: [' ▄██▄ ', '██▀▀█', '█████', '▀███▀'], color: '#00ff41', points: 150 },
    { name: 'GOOGLE', logo: ['╔═══╗', '║ ▄▄║', '║███║', '╚═══╝'], color: '#ff00ff', points: 200 },
    { name: 'META', logo: ['█▀▄▀█', '█ ▀ █', '█   █', '▀   ▀'], color: '#00d9ff', points: 180 },
    { name: 'AMAZON', logo: [' ▄▀▀▄ ', '█▀▀▀█', '█▄▄▄█', '▀▄▄▄▀'], color: '#ffff00', points: 150 },
    { name: 'NETFLIX', logo: ['█▄  █', '██▄ █', '█ ███', '█  ▀█'], color: '#ff0000', points: 170 },
    { name: 'TWITTER', logo: [' ▄▄█ ', '███▀ ', '█▀   ', '▀    '], color: '#1DA1F2', points: 130 }
];

// Distribution difficulty levels (waves to complete)
const DISTRIBUTIONS = {
    'debian': { name: 'DEBIAN', icon: '🔴', color: '#ff006e', speed: 6, difficulty: 5, desc: 'Stable' },
    'ubuntu': { name: 'UBUNTU', icon: '🟠', color: '#ff6600', speed: 7, difficulty: 10, desc: 'Facile' },
    'fedora': { name: 'FEDORA', icon: '🎩', color: '#00d9ff', speed: 8, difficulty: 15, desc: 'Intermédiaire' },
    'linux': { name: 'LINUX', icon: '🐧', color: '#ffff00', speed: 8, difficulty: 20, desc: 'Avancé' },
    'freebsd': { name: 'FreeBSD', icon: '😈', color: '#ff0000', speed: 7, difficulty: 25, desc: 'Expert' },
    'arch': { name: 'ARCH', icon: '⚡', color: '#00d9ff', speed: 10, difficulty: 30, desc: 'Extrême' }
};

const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 500;
const PLAYER_SIZE = 40;
const ENEMY_WIDTH = 60;
const ENEMY_HEIGHT = 50;
const BULLET_SPEED = 7;
const SHOT_COOLDOWN = 200;
const RELOAD_TIME = 2000;
