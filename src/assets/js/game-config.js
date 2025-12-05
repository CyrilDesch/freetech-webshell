// Game Configuration
const ENEMY_TEMPLATES = [
    { name: 'WINDOWS', logo: ['▀▀▀▀▀▀', '█▄▄█▄▄', '█▀▀█▀▀', '▄▄▄▄▄▄'], color: '#00d9ff', points: 100 },
    { name: 'APPLE', logo: ['  ▄█▄  ', ' █▀ ▀█ ', '█ ▄▄ █ ', ' ▀▀▀▀  '], color: '#00ff41', points: 150 },
    { name: 'GOOGLE', logo: ['▄▀▀▀▀▄', '█ ▄▄ █', '█ ▀▀▄█', '▀▄▄▄▄▀'], color: '#ff00ff', points: 200 },
    { name: 'META', logo: ['█▄ ▄█', '█ █ █', '█   █', '▀   ▀'], color: '#00d9ff', points: 180 },
    { name: 'AMAZON', logo: ['▄▀▀▀▄', '█▄▄▄█', '█   █', '▀▄▄▄▀'], color: '#ffff00', points: 150 }
];

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const PLAYER_SIZE = 40;
const ENEMY_WIDTH = 60;
const ENEMY_HEIGHT = 50;
const BULLET_SPEED = 7;
const SHOT_COOLDOWN = 200;
const RELOAD_TIME = 2000;
