// Fonction pour faire apparaître des particules
function spawnParticule() {
    // gère les chances d'avoir des particules
    var particuleChances = {
        "particule": 5
    };

    // Génère un nombre aléatoire et vérifie s'il correspond aux chances d'avoir un obstacle
    if (Math.round(Math.random() * particuleChances["particule"] - 1) === 0) {
        console.log("Create a particule");
        return "particule"; // Si c'est le cas, retourne "particule" pour indiquer qu'un obstacle doit être créé
    }
    return 0; // Sinon, retourne 0 pour indiquer qu'aucune particule ne doit être créé
}

// Objet représentant une particule
var particule = new function() {
    this.img = new Image();
    this.img.src = "Sprites/GalacticDangers/particule.png"; 
    this.xDif = 10; // Décalage horizontal par rapport au bloc
    this.yDif = -30; // Décalage vertical par rapport au bloc
    this.width = 69; // Largeur de l'image de l'particule
    this.height = 60; // Hauteur de l'image de l'particule

    // Méthode pour dessiner la particule sur le canevas
    this.draw = function(blockX, blockY) {
        ctx.drawImage(this.img, blockX + this.xDif, blockY + this.yDif, this.width, this.height);
    }
}

// Objet contenant les fonctions associées à chaque type d'élément
var particuleFunctions = {
    "particule": particule // Associe le type "particule" à l'objet représentant l'obstacle
}

