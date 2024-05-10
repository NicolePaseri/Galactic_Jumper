// Fonction pour faire apparaître des trous noirs
function spawnBlackHole() {
    // Gère les chances d'avoir des trous noirs
    var blackHoleChances = {
        "blackHole": 10
    };

    // Génère un nombre aléatoire et vérifie s'il correspond aux chances d'avoir un trou noir
    if (Math.round(Math.random() * blackHoleChances["blackHole"] - 1) === 0) {
        console.log("Create a black hole");
        return "blackHole"; // Si c'est le cas, retourne "blackHole" pour indiquer qu'un trou noir doit être créé
    }
    return 0; // Sinon, retourne 0 pour indiquer qu'aucun trou noir ne doit être créé
}


// Objet représentant un trou noir
var blackHole = new function() {
    this.img = new Image();
    this.img.src = "Sprites/blackHole.png"; 
    this.xDif = 10; // Décalage horizontal par rapport au bloc
    this.yDif = -30; // Décalage vertical par rapport au bloc
    this.width = 69; // Largeur de l'image du trou noir
    this.height = 60; // Hauteur de l'image du trou noir

    // Méthode pour dessiner le trou noir sur le canevas
    this.draw = function(blockX, blockY) {
        ctx.drawImage(this.img, blockX + this.xDif, blockY + this.yDif, this.width, this.height);
    }
}

// Objet contenant les fonctions associées à chaque type d'élément
var blackHoleFunctions = {
    "blackHole": blackHole // Associe le type "blackHole" à l'objet représentant le trou noir
}
