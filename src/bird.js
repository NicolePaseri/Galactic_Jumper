// Fonction pour faire apparaître des oiseaux
function spawnbird() {
    // gère les chances d'avoir des oiseaux
    var birdChances = {
        "bird": 5
    };

    // Génère un nombre aléatoire et vérifie s'il correspond aux chances d'avoir un oiseau
    if (Math.round(Math.random() * birdChances["bird"] - 1) === 0) {
        return "bird"; // Si c'est le cas, retourne "bird" pour indiquer qu'un oiseau doit être créé
    }
    return 0; // Sinon, retourne 0 pour indiquer qu'aucun oiseau ne doit être créé
}

// Objet représentant un oiseau
var bird = new function() {
    this.img = new Image();
    this.img.src = "Sprites/GalacticDangers/oiseau-transformed.png"; // Chemin d'accès à l'image de l'oiseau
    this.xDif = 10; // Décalage horizontal par rapport au bloc
    this.yDif = -30; // Décalage vertical par rapport au bloc
    this.width = 69; // Largeur de l'image de l'oiseau
    this.height = 60; // Hauteur de l'image de l'oiseau

    // Méthode pour dessiner l'oiseau sur le canevas
    this.draw = function(blockX, blockY) {
        ctx.drawImage(this.img, blockX + this.xDif, blockY + this.yDif, this.width, this.height);
    }
}

// Objet contenant les fonctions associées à chaque type d'élément
var birdFunctions = {
    "bird": bird // Associe le type "bird" à l'objet représentant l'oiseau
}
