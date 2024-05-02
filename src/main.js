var c = document.getElementById("gameCanvas");
const background = document.getElementById("background");

var ctx = c.getContext("2d");
var backgroundctx = background.getContext("2d");

var screenWidth = 500;
var screenHeight = 800;
c.width = screenWidth;
c.height = screenHeight;

document.body.appendChild(c);

window.addEventListener('keydown', this.keydown, false);
window.addEventListener('keyup', this.keyup, false);

// Variables
const gravity = 0.34;
var holdingLeftKey = false;
var holdingRightKey = false;
var keycode;
var dead = false;
var difficulty = 0;
var lowestBlock = 0;
var score = 0;
var yDistanceTravelled = 0;
var lives = 15;
var canLoseLife = true;
var isBlinking = false;
var isDesoriented = false; 
var level = 1;

var blocks = [];
var powerups = [];
var backgroundImage = new Image();
var backgroundImageWin = new Image();
var backgroundImageLevel1 = new Image();
var backgroundImageLevel2 = new Image();
var backgroundImageLevel3 = new Image();
backgroundImageWin.src = "Sprites/backgroundWin.png";
backgroundImageLevel1.src = "Sprites/level1.png"; 
backgroundImageLevel2.src = "Sprites/level2.png"; 
backgroundImageLevel3.src = "Sprites/level3.png"; 

// Time variables
var fps = 60;
var now;
var then = Date.now();
var interval = 1000 / fps;
var delta;

function keydown(e) {
    if (e.keyCode === 37) {
        holdingLeftKey = true;
    } else if (e.keyCode === 39) {
        holdingRightKey = true;
    }

    if (e.keyCode === 32 && dead) {
        resetGame();
    }
}

function keyup(e) {
    if (e.keyCode === 37) {
        holdingLeftKey = false;
    } else if (e.keyCode === 39) {
        holdingRightKey = false;
    }
}

function showScore() {
    if (yDistanceTravelled > score) {
        score = Math.round(yDistanceTravelled);
    }

    ctx.font = "36px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
    ctx.fillText(score, 15, 40); 
}

function resetGame() {

    document.body.appendChild(c);
    // Réinitialiser les variables du jeu

    dead = false;

    blocks = [];
    lowestBlock = 0;
    difficulty = 0;
    score = 0;
    lives = 15;
    level = 1;
    yDistanceTravelled = 0;
    player.rocketDurability = 0;
    
    player.x = 300;
    player.y = 550;

    blocks.push(new block);
    blocks[0].x = 300;
    blocks[0].y = 650;
    blocks[0].obstacle = 0;
    blocks[0].particule = 0;
    blocks[0].alien = 0;
    blocks[0].blackHole = 0;
    blocks[0].type = 0;
    blocks[0].powerup = 0;

    blockSpawner();

    loop();
}

function loop() {
    requestAnimationFrame(loop);

    // Mise à jour du FPS
    now = Date.now();
    delta = now - then;

    if (delta > interval) {
        ctx.clearRect(0, 0, screenWidth, screenHeight); // Effacer le canevas

        if (container.style.display !== 'none') {
            return; // Ne rien dessiner si la page d'accueil est affichée
        }
        level = updateLevel(score);
        backgroundctx.drawImage(backgroundImage, 0, 0, screenWidth, screenHeight);

        drawLives();

        // Mise à jour et affichage des blocs
        if (delta > interval) {
            ctx.clearRect(0, 0, screenWidth, screenHeight); // Effacer le canevas
            
            level = updateLevel(score);
            // Affichage du fond d'écran en fonction du score
            backgroundctx.drawImage(backgroundImage, 0, 0, screenWidth, screenHeight);
         // choisir quand est ce que la win page s'affiche
            drawLives();
        
            // Mise à jour et affichage des blocs
            for (var i = 0; i < blocks.length; i++) {
                if (blocks[i] !== 0) {
                    blocks[i].update();
                    blocks[i].draw();
                }
            }
        
            // Mise à jour et affichage du joueur
            player.update();
            player.draw();
        
            // Affichage du score
            showScore();
        
            then = now - (delta % interval);
        }
    }
}

