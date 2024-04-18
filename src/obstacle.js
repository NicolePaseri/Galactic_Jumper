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

// Fonction pour définir le chemin d'accès à l'image en fonction du niveau
function setImageSrc(level) {
    if (level === 1) {
        obstacle.img.src = "Sprites/GalacticDangers/oiseau-transformed.png";
    } else if (level === 2) {
        obstacle.img.src = "Sprites/GalacticDangers/Satélite-transformed.png";
    } else if (level === 3) {
        obstacle.img.src = "Sprites/GalacticDangers/meteore.png";
    } else {
        // Niveau par défaut ou autre traitement selon vos besoins
    }
}

// Objet contenant les fonctions associées à chaque type d'élément
var obstacleFunctions = {
    "obstacle": obstacle // Associe le type "obstacle" à l'objet représentant l'obstacle
}

// Utilisation de la fonction pour définir le chemin d'accès à l'image en fonction du niveau actuel
function updateLevel(level) {
    Level = level; // Met à jour le niveau actuel
    setImageSrc(Level); // Met à jour le chemin d'accès à l'image en fonction du niveau
}

// Exemple de mise à jour du niveau (à appeler lorsque le niveau change)
// updateLevel(2); // Change le niveau à 2 (à décommenter et à utiliser au bon endroit dans votre code)
