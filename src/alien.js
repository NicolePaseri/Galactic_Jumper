// Fonction pour faire apparaître des aliens
function spawnAlien() {
    // gère les chances d'avoir des aliens
    var alienChances = {
        "alien": 30
    };

    // Génère un nombre aléatoire et vérifie s'il correspond aux chances d'avoir un alien
    if (Math.round(Math.random() * alienChances["alien"] - 1) === 0) {
        console.log("Create an alien ");
        return "alien"; // Si c'est le cas, retourne "alien" pour indiquer qu'un alien doit être créé
    }
    return 0; // Sinon, retourne 0 pour indiquer qu'aucun alien ne doit être créé
}


// Objet représentant une alien
var alien = new function() {
    this.img = new Image();
    this.img.src = "Sprites/GalacticDangers/Alien.png"; 
    this.xDif = 10; // Décalage horizontal par rapport au bloc
    this.yDif = -30; // Décalage vertical par rapport au bloc
    this.width = 69; // Largeur de l'image de l'alien
    this.height = 60; // Hauteur de l'image de l'alien

    // Méthode pour dessiner la alien sur le canevas
    this.draw = function(blockX, blockY) {
        ctx.drawImage(this.img, blockX + this.xDif, blockY + this.yDif, this.width, this.height);
    }
}

// Objet contenant les fonctions associées à chaque type d'élément
var alienFunctions = {
    "alien": alien // Associe le type "alien" à l'objet représentant l'obstacle
}

