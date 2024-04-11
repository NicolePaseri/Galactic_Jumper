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

var blocks = [];
var powerups = [];
var backgroundImage = new Image();
var backgroundImageLevel2 = new Image();
var backgroundImageLevel3 = new Image();
backgroundImage.src = "Sprites/level1.png"; // Chemin d'accès pour le fond d'écran du niveau 1
backgroundImageLevel2.src = "Sprites/level2.png"; // Chemin d'accès pour le fond d'écran du niveau 2
backgroundImageLevel3.src = "Sprites/level3.png"; // Chemin d'accès pour le fond d'écran du niveau 3


// Time variables
var fps = 60;
var now;
var then = Date.now();
var interval = 1000 / fps;
var delta;

function keydown(e) {
    if (e.keyCode === 65) {
        holdingLeftKey = true;
    } else if (e.keyCode === 68) {
        holdingRightKey = true;
    }

    if (e.keyCode === 82 && dead) {
        blocks = [];
        lowestBlock = 0;
        difficulty = 0;
        score = 0;
        yDistanceTravelled = 0;
        player.springBootsDurability = 0;

        blocks.push(new block);
        blocks[0].x = 300;
        blocks[0].y = 650;
        blocks[0].bird = 0;
        blocks[0].type = 0;
        blocks[0].powerup = 0;

        blockSpawner();
        
        player.x = 300;
        player.y = 550;


        dead = false;
    }
}

function keyup(e) {
    if (e.keyCode === 65) {
        holdingLeftKey = false;
    } else if (e.keyCode === 68) {
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

blocks.push(new block);
blocks[0].x = 300;
blocks[0].y = 650;
blocks[0].bird = 0;
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
        if (score > 2000) {
            backgroundImage = backgroundImageLevel3;
        } else if (score > 1000) {
            backgroundImage = backgroundImageLevel2;
        } else {
            backgroundImage = backgroundImage;
            showScore();
        }
        ctx.drawImage(backgroundImage, 0, 0, screenWidth, screenHeight);


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

        // Vérifier si le score dépasse 10'000 pour passer au niveau 2
        if (score > 10000) {
            // Code pour passer au niveau 2
            backgroundImage = backgroundImageLevel2;
        } else if(score > 20000){
            backgroundImage = backgroundImageLevel3;
        }else{
            showScore();
        }

        then = now - (delta % interval);
    }
}

loop();