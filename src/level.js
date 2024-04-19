function updateLevel(score) {
    if (score > 1000) {
        level = 2;
        backgroundImage = backgroundImageLevel2;
        obstacle.img.src = "Sprites/GalacticDangers/Satélite-transformed.png";
    } else if (score > 5000) {
        level = 3;
        backgroundImage = backgroundImageLevel3;
        obstacle.img.src = "Sprites/GalacticDangers/meteore.png";
    } else {
        level = 1;
        backgroundImage = backgroundImageLevel1;
        obstacle.img.src = "Sprites/GalacticDangers/oiseau-transformed.png";
    }
}

