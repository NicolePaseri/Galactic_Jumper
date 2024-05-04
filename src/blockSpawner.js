// Fonction pour générer de nouveaux blocs
function blockSpawner() {
    // Si aucun bloc n'existe encore
    if (lowestBlock === 0) {
        var i = 1; // Commencer à créer des blocs à partir de l'indice 1
    } else {
        var i = lowestBlock; // Commencer à créer des blocs à partir de l'indice du bloc le plus bas
    }

    // Création de nouveaux blocs
    for (i; i < lowestBlock + 60; i++) {
        // Vérification si nous avons atteint la limite de la liste de blocs
        if (i >= blocks.length) {
            // Création d'un nouveau bloc
            blocks.push(new block);

            // Détermination du type de bloc à partir de la fonction spawnBlock()
            if (blocks[i - 1].type === "break") {
                blocks[i].type = 0; // Si le bloc précédent était cassant, le prochain bloc sera de type 0 (normal)
            } else {
                blocks[i].type = spawnBlock(); // Sinon, détermine un nouveau type de bloc
            }

            blocks[i].powerup = 0; // Réinitialisation de la puissance spéciale du bloc
            blocks[i].obstacle = 0; // Réinitialisation de la présence d'oiseau sur le bloc
            blocks[i].particule = 0;
            blocks[i].alien = 0; // Réinitialisation de la présence d'alien sur le bloc
            blocks[i].blackHole =0;

            // Génération de la puissance spéciale du bloc (si le bloc n'est pas cassant)
           // Génération de la puissance spéciale du bloc (si le bloc n'est pas cassant)
if (blocks[i].type === 0) {
    blocks[i].powerup = spawnPowerup(); // Détermination de la puissance spéciale du bloc
    // Si aucune puissance spéciale n'est générée, détermine s'il y aura un oiseau, une particule ou un trou noir
    if (blocks[i].powerup === 0) {
        blocks[i].obstacle = spawnObstacle(); // Détermine s'il y aura un oiseau sur le bloc
        if (blocks[i].obstacle === 0) {
            if (level === 2) {
                blocks[i].particule = spawnParticule(); // Détermine s'il y aura une particule sur le bloc si le niveau est 2
            }
            if (level === 3){
            blocks[i].alien = spawnAlien(); // Détermine s'il y aura un alien sur le bloc
            if (blocks[i].alien === 0) {
                blocks[i].blackHole = spawnBlackHole(); // Détermine s'il y aura un trou noir sur le bloc
            }
        }
        }
    }
}


           // Détermination aléatoire de la position horizontale du bloc
blocks[i].x = Math.random() * (screenWidth - blocks[i].width);

// Détermination de la position verticale du bloc en fonction du type de bloc précédent et de la présence d'oiseau, d'alien ou de trou noir
if (blocks[i].type === "break" || blocks[i - 1].type === "break") {
    blocks[i].y = (blocks[i - 1].y) - (((Math.random() * (5 + (difficulty * 25))) + 30) / 2); // Positionnement pour les blocs cassants
} else if (blocks[i].obstacle !== 0 || blocks[i].particule !== 0 || blocks[i].alien !== 0 || blocks[i].blackHole !== 0) {
    blocks[i].y = (blocks[i - 1].y) - ((Math.random() * (5 + (difficulty * 25))) + 50); // Positionnement pour les blocs avec oiseau, particule, alien ou trou noir
} else if (blocks[i - 1].obstacle !== 0 || blocks[i - 1].particule !== 0 || blocks[i - 1].alien !== 0 || blocks[i - 1].blackHole !== 0) {
    blocks[i].y = (blocks[i - 1].y) - ((Math.random() * (5 + (difficulty * 25))) + 50); // Positionnement pour les blocs avec oiseau, particule, alien ou trou noir précédent
} else {
    blocks[i].y = (blocks[i - 1].y) - ((Math.random() * (80 + (difficulty * 25))) + 100); // Positionnement pour les autres types de blocs
}
        }
    }
    

    // Suppression des blocs qui se trouvent en dessous de nous maintenant
    for (var i = 0; i < lowestBlock - 2; i++) {
        blocks.shift(); // Supprime les blocs en dessous de l'indice du bloc le plus bas
    }
}
