let gameState = 'select'; // select, playing, gameover, victory
let selectedShip = null;
let selectedDistro = null;
let playerX = 350;
let playerY = 0;
let enemies = [];
let bullets = [];
let powerUps = [];
let score = 0;
let lives = 3;
let ammo = 30;
let maxAmmo = 30;
let wave = 1;
let requiredWaves = 10;
let enemyDirection = 1;
let isReloading = false;
let hasShield = false;
let gameLoop = null;
let lastShotTime = 0;
let enemySpawnQueue = [];
let lastSpawnTime = 0;
const SPAWN_INTERVAL = 800;
let waveTransitioning = false;

let canvas, ctx;

function initGameCanvas() {
    canvas = document.getElementById('gameCanvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
        return true;
    }
    return false;
}
