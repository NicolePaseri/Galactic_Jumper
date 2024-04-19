// Fonction pour faire apparaître des obstacles
function spawnObstacle() {
    // gère les chances d'avoir des obstacles
    var obstacleChances = {
        "obstacle": 5
    };

    // Génère un nombre aléatoire et vérifie s'il correspond aux chances d'avoir un obstacle
    if (Math.round(Math.random() * obstacleChances["obstacle"] - 1) === 0) {
        return "obstacle"; // Si c'est le cas, retourne "obstacle" pour indiquer qu'un obstacle doit être créé
    }
    return 0; // Sinon, retourne 0 pour indiquer qu'aucun obstacle ne doit être créé
}

// Objet représentant un obstacle
var obstacle = new function() {
    this.img = new Image();
    this.img.src = ""; // Le chemin d'accès à l'image sera défini en fonction du niveau
    this.xDif = 10; // Décalage horizontal par rapport au bloc
    this.yDif = -30; // Décalage vertical par rapport au bloc
    this.width = 69; // Largeur de l'image de l'obstacle
    this.height = 60; // Hauteur de l'image de l'obstacle

    // Méthode pour dessiner l'obstacle sur le canevas
    this.draw = function(blockX, blockY) {
        ctx.drawImage(this.img, blockX + this.xDif, blockY + this.yDif, this.width, this.height);
    }
}

// Objet contenant les fonctions associées à chaque type d'élément
var obstacleFunctions = {
    "obstacle": obstacle // Associe le type "obstacle" à l'objet représentant l'obstacle
}

