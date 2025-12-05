const ENEMY_TEMPLATES = [
    { name: 'WINDOWS', logo: 'W', color: '#00d9ff', points: 100 },
    { name: 'APPLE', logo: 'A', color: '#00ff41', points: 150 },
    { name: 'GOOGLE', logo: 'G', color: '#ff00ff', points: 200 },
    { name: 'META', logo: 'M', color: '#00d9ff', points: 180 },
    { name: 'AMAZON', logo: 'Z', color: '#ffff00', points: 150 },
    { name: 'NETFLIX', logo: 'N', color: '#ff0000', points: 170 },
    { name: 'FACEBOOK', logo: 'F', color: '#1877F2', points: 140 },
    { name: 'X', logo: 'X', color: '#1DA1F2', points: 130 }
];

const DISTRIBUTIONS = {
    'debian': { name: 'DEBIAN', icon: '🌀', color: '#ff006e', speed: 6, difficulty: 5, desc: 'Stable' },
    'ubuntu': { name: 'UBUNTU', icon: '🟠', color: '#ff6600', speed: 7, difficulty: 10, desc: 'Facile' },
    'fedora': { name: 'FEDORA', icon: '🎩', color: '#00d9ff', speed: 8, difficulty: 15, desc: 'Intermédiaire' },
    'linux': { name: 'LINUX', icon: '🐧', color: '#ffff00', speed: 8, difficulty: 20, desc: 'Avancé' },
    'freebsd': { name: 'FreeBSD', icon: '😈', color: '#ff0000', speed: 7, difficulty: 25, desc: 'Expert' },
    'arch': { name: 'ARCH', icon: '⚡', color: '#00d9ff', speed: 10, difficulty: 30, desc: 'Extrême' }
};

let CANVAS_WIDTH = 900;
let CANVAS_HEIGHT = 600;

function initCanvasSize() {
    const maxWidth = Math.min(window.innerWidth - 100, 1200);
    const maxHeight = Math.min(window.innerHeight - 250, 700);
    CANVAS_WIDTH = Math.max(700, maxWidth);
    CANVAS_HEIGHT = Math.max(500, maxHeight);
    
    const canvas = document.getElementById('gameCanvas');
    if (canvas) {
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
    }
}

const PLAYER_SIZE = 35;
const ENEMY_WIDTH = 45;
const ENEMY_HEIGHT = 40;
const BULLET_SPEED = 7;
const SHOT_COOLDOWN = 200;
const RELOAD_TIME = 2000;
const ENEMY_MOVE_DOWN_STEP = 15;
