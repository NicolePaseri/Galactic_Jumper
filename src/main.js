// Importez la fonction depuis firebase.js

var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");
var background = document.getElementById("background");
var backgroundctx = background.getContext("2d");

var screenWidth = 500;
var screenHeight = 800;
c.width = screenWidth;
c.height = screenHeight;

var screenWidthBackground = 1920;
var screenHeightBackground = 7500; // Hauteur du fond ajustable
background.width = screenWidthBackground;
background.height = screenHeightBackground;

document.body.appendChild(c);

// Ajout de variables pour stocker l'état des touches tactiles
var holdingLeftTouch = false;
var holdingRightTouch = false;

window.addEventListener('keydown', keydown, false);
window.addEventListener('keyup', keyup, false);

c.addEventListener('touchstart', handleTouchStart, false);
c.addEventListener('touchend', handleTouchEnd, false);

// Fonction pour gérer le toucher initial
function handleTouchStart(event) {
    event.preventDefault();
    var touch = event.touches[0];
    var touchX = touch.clientX;
    // Vérifier si le toucher est dans la moitié gauche ou droite de l'écran
    if (touchX < screenWidth / 2) {
        holdingLeftTouch = true;
    } else {
        holdingRightTouch = true;
    }
}

// Fonction pour gérer le toucher de fin
function handleTouchEnd(event) {
    event.preventDefault();
    // Réinitialiser les drapeaux des touches
    holdingLeftTouch = false;
    holdingRightTouch = false;
}

// Variables
const gravity = 0.34;
var holdingLeftKey = false;
var holdingRightKey = false;
var keycode;
var dead = false;
var lowestBlock = 0;
var score = 0;
var yDistanceTravelled = 0;
var lives = 0;
var canLoseLife = true;
var isBlinking = false;
var isDesoriented = false; 
var level = 0;
var backgroundTemp = 0;
var scoreTemp = 0;
// Récupérer le nom d'utilisateur stocké
var username = localStorage.getItem("username");
console.log(username);
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
var isPaused = false;


document.getElementById('pauseButton').addEventListener('click', function() {
    isPaused = true;
});

document.getElementById('playButton').addEventListener('click', function() {
    if (isPaused) {
        isPaused = false;
        then = Date.now(); // Reset the time to avoid large delta
        loop();
    }
});

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

function sendScore() {
    username = localStorage.getItem("username");
    console.log(username);
    scoreTemp = score;
    sendScoreToFirebase(scoreTemp, username);
}


function resetGame() {
    sendScore();
    
    document.body.appendChild(c);

    // Réinitialiser les variables du jeu
    dead = false;
    blocks = [];
    lowestBlock = 0;
    score = 0;
    lives = 5;
    level = 1;
    yDistanceTravelled = 0;
    player.rocketDurability = 0;

    setPlayerPosition();
    createPlatformAtBottom();

    blockSpawner();
    
    loop();
}

  
// Ajout de la variable pour la position de défilement de l'image de fond
var backgroundScrollY = 0;
var scrollSpeed = 0.05; // Ajustez cette valeur pour changer la vitesse de défilement

function updateBackgroundPosition(score) {
    // Calculez la nouvelle position de défilement en fonction du score et de la vitesse
    var maxScroll = screenHeightBackground - screenHeight;
    // Calcul pour faire défiler de bas en haut
    backgroundScrollY = maxScroll - (score * scrollSpeed) % maxScroll + backgroundTemp;
    if (backgroundScrollY < 0) backgroundScrollY = 0; // S'assurer que la position ne dépasse pas la partie visible
    if (backgroundScrollY > maxScroll) backgroundScrollY = maxScroll; // S'assurer que le fond ne "déborde" pas vers le haut
}

function loop() {


    if (isPaused) return;

    requestAnimationFrame(loop);

    // Mise à jour du FPS
    now = Date.now();
    delta = now - then;

    if (delta > interval) {
        ctx.clearRect(0, 0, screenWidth, screenHeight); // Effacer le canevas
        backgroundctx.clearRect(0, 0, screenWidthBackground, screenHeightBackground); // Effacer le fond

        if (container && container.style.display !== 'none') {
            return; // Ne rien dessiner si la page d'accueil est affichée
        }

        updateBackgroundPosition(score);

        backgroundctx.drawImage(backgroundImage, 0, -backgroundScrollY, screenWidthBackground, screenHeightBackground);

        level = updateLevel(score);
        drawLives();

        // Mise à jour et affichage des blocs
        for (var i = 0; i < blocks.length; i++) {
            if (blocks[i] !== 0) {
                blocks[i].update();
                blocks[i].draw();
            }
        }

        player.update();
        player.draw();

        showScore();

        then = now - (delta % interval);
    }
}

function createPlatformAtBottom() {
    var newBlock = new block();
    newBlock.x = Math.floor(screenWidth / 2 / 100) * 100;
    newBlock.y = screenHeight - newBlock.height; 
    newBlock.obstacle = 0;
    newBlock.particule = 0;
    newBlock.alien = 0;
    newBlock.blackHole = 0;
    newBlock.type = 0;
    newBlock.powerup = 0;
    blocks.push(newBlock);
}

function setPlayerPosition() {
    player.x = Math.floor(screenWidth / 2 / 100) * 100;
    player.y = 550;
}


// Démarrer le jeu au chargement de la page
window.onload = function() {
    loop();
}

