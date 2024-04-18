var c = document.createElement("canvas");
var ctx = c.getContext("2d");
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
let lives = 15;
var canLoseLife = true;
var isBlinking = false;
var isDesoriented = false; 

var blocks = [];
var powerups = [];
var backgroundImage = new Image();
var backgroundImageLevel1 = new Image();
var backgroundImageLevel2 = new Image();
var backgroundImageLevel3 = new Image();
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
    blocks = [];
    lowestBlock = 0;
    difficulty = 0;
    score = 0;
    lives = 15;
    yDistanceTravelled = 0;
    player.rocketDurability = 0;
    backgroundImage = backgroundImageLevel1;

    blocks.push(new block);
    blocks[0].x = 300;
    blocks[0].y = 650;
    blocks[0].obstacle = 0;
    blocks[0].particule = 0;
    blocks[0].type = 0;
    blocks[0].powerup = 0;

    blockSpawner();
    
    player.x = 300;
    player.y = 550;

    dead = false;
}

// Collision

function collisionWithPlayer(block) {
    return (
        player.x < block.x + block.width &&
        player.x + player.width > block.x &&
        player.y < block.y + block.height &&
        player.y + player.height > block.y
    );
}

blocks.push(new block);
blocks[0].x = 300;
blocks[0].y = 650;
blocks[0].obstacle = 0;
blocks[0].particule = 0;
blocks[0].type = 0;
blocks[0].powerup = 0;

blockSpawner();


function loop() {
    requestAnimationFrame(loop);

    // Mise à jour du FPS
    now = Date.now();
    delta = now - then;

    if (delta > interval) {
        ctx.clearRect(0, 0, screenWidth, screenHeight); // Effacer le canevas

        // Affichage du fond d'écran
        if (score > 10000) {
            backgroundImage = backgroundImageLevel3;
            updateLevel(3);
        } else if (score > 1000) {
            backgroundImage = backgroundImageLevel2;
            updateLevel(2);
        } else {
            backgroundImage = backgroundImageLevel1;
            updateLevel(1);
        }        
        ctx.drawImage(backgroundImage, 0, 0, screenWidth, screenHeight);

        drawLives();


        // Mise à jour et affichage des blocs
        if (delta > interval) {
            ctx.clearRect(0, 0, screenWidth, screenHeight); // Effacer le canevas
        
            // Affichage du fond d'écran en fonction du score
            if (score > 2000) {
                backgroundImage = backgroundImageLevel3;
                updateLevel(3);
            } else if (score > 1000) {
                backgroundImage = backgroundImageLevel2;
                updateLevel(2);
            } else {
                backgroundImage = backgroundImageLevel1;
                updateLevel(1);
            }        
            ctx.drawImage(backgroundImage, 0, 0, screenWidth, screenHeight);
        
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
    loop();
