function updateLevel(score) {
    if (score < 128133) {
        level = 1;
        backgroundImage = backgroundImageLevel1;
        obstacle.img.src = "Sprites/GalacticDangers/oiseau-transformed.png";
    } else if (score < 256267) {
        level = 2;
        backgroundImage = backgroundImageLevel2;
        obstacle.img.src = "Sprites/GalacticDangers/Satélite-transformed.png";
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

