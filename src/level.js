var temporaryImage = "Sprites/AlienBackGround.png"; // Chemin de votre image temporaire

function updateLevel(score) {
    if (score < 128133) {
        level = 1;
        backgroundImage = backgroundImageLevel1;
        obstacle.img.src = "Sprites/GalacticDangers/oiseau-transformed.png";
        
    } else if (score < 256267) {
        level = 2;
        // Affichage de l'image temporaire avant le niveau 2
        backgroundImage = backgroundImageLevel2; // Assurez-vous de ne pas changer l'arrière-plan
        obstacle.img.src = temporaryImage; // Affichez l'image temporaire
        
        // Réinitialisez l'image de l'obstacle après 5 secondes
        setTimeout(function() {
            obstacle.img.src = "Sprites/GalacticDangers/Satélite-transformed.png";
        }, 5000); // 5000 millisecondes = 5 secondes
        
    } else if (score < 384400 ){
        level = 3;
        backgroundImage = backgroundImageLevel3;
        obstacle.img.src = "Sprites/GalacticDangers/meteore.png";
       
    } else {
        level = 4;
        gameWon();
    }

    return level;
}
