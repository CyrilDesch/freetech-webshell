// Game State Variables
let gameState = 'select'; // select, playing, gameover
let selectedShip = null;
let playerX = 400;
let playerY = 540;
let enemies = [];
let bullets = [];
let powerUps = [];
let score = 0;
let lives = 3;
let ammo = 30;
let maxAmmo = 30;
let wave = 1;
let enemyDirection = 1;
let isReloading = false;
let hasShield = false;
let gameLoop = null;
let lastShotTime = 0;

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
