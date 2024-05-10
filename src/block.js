var cloudImage = new Image();
cloudImage.src = 'Sprites/cloud.png';

var rocketImage = new Image();
rocketImage.src = 'Sprites/rocket.png';


function block() {
    this.x;
    this.y;
    this.width = 100;
    this.height = 15;
    this.powerup;
    this.type;
    this.obstacle;
    this.particule;
    this.alien;
    this.blackHole;
    this.direction = "right";
    this.moveTime = 10;

    // Plateformes qui se cassent et plateformes qui bougent
this.draw = function() {
    if (this.type === "break") {
        ctx.fillStyle = "#876537";
    } else if (this.type === "sideways") {
        ctx.fillStyle = "#14a7c8";
    } else {
        ctx.fillStyle = "#FFFFFF"; // Plateforme blanche retirée d'ici
    }

    // Dessiner l'obstacle si présent
    if (this.obstacle !== 0) {
        obstacleFunctions[this.obstacle].draw(this.x, this.y);
    } 
    // Dessiner la particule si présente
    else if (this.particule !== 0) {
        particuleFunctions[this.particule].draw(this.x, this.y);
    } 
    // Dessiner le power-up cloud si présent
    else if (this.powerup === "cloud") {
        ctx.drawImage(cloudImage, this.x + 25, this.y - 20, 90, 90); // Ajustez la taille ici
    } 
    // Dessiner le power-up rocket si présent
    else if (this.powerup === "rocket") {
        ctx.drawImage(rocketImage, this.x + 20, this.y - 100, 100, 100); // Ajustez la taille ici
        ctx.fillRect(this.x, this.y, this.width, this.height);
    } 
    // Dessiner l'alien si présent
    else if (this.alien !== 0) {
        alienFunctions[this.alien].draw(this.x, this.y); // Assurez-vous d'avoir les fonctions appropriées pour dessiner les aliens
    } 
   // Dessiner le trou noir si présent
    else if (this.blackHole !== 0) {
    blackHoleFunctions[this.blackHole].draw(this.x, this.y); // Assurez-vous d'avoir les fonctions appropriées pour dessiner les trous noirs
    }   
    // Si aucun des cas ci-dessus, dessiner simplement un rectangle
    else {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


this.update = function() {
    if (this.type === "sideways") {
        if (this.x >= screenWidth - this.width) {
            this.direction = "left";
        } else if (this.x <= 0) {
            this.direction = "right";
        }

        if (this.direction === "right") {
            this.x += 2.5;
        } else {
            this.x -= 2.5;
        }
    }

    if (this.obstacle === "obstacle") {
        if (level === 1) {
            // Mouvement de gauche à droite pour le niveau 1
            if (this.direction === "right") {
                this.x += 1;
                this.moveTime -= 1;

                if (this.moveTime === 0) {
                    this.direction = "left";
                    this.moveTime = 40;
                }
            } else {
                this.x -= 1;
                this.moveTime -= 1;

                if (this.moveTime === 0) {
                    this.direction = "right";
                    this.moveTime = 40;
                }
            }
        } else if (level === 2) {
           // Définition des variables
var startX = 0; // Position de départ sur l'axe des x
var speedX = 2; // Vitesse horizontale

// Mise à jour de la position horizontale de l'objet
this.x += speedX;

// Vérification si l'objet est sorti de l'écran à droite
if (this.x > screenWidth) {
    // Réinitialisation de la position à gauche de l'écran
    this.x = startX;
}

        }else if (level === 3) {
           // Définition des variables
var startY = 0; // Position de départ sur l'axe des y
var speedY = 1; // Vitesse verticale
var time = Date.now(); // Utilisation du temps comme paramètre pour le mouvement diagonal

// Mouvement de haut en bas en diagonale
if (this.direction === "downRight") {
    this.x += 1;
    this.y += 1;
} else {
    this.x -= 1;
    this.y -= 1;
}

// Mise à jour de la position verticale de l'objet
this.y += speedY;

// Vérification si l'objet est sorti de l'écran en bas
if (this.y > screenHeight) {
    // Réinitialisation de la position en haut de l'écran
    this.y = startY;
}
        }
    }
}

}
