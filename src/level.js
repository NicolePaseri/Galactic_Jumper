function updateLevel(score) {
    if (score < 128133) {
        if(level !== 1){
            showLevel1();
            console.log("Level 1");
        }
        level = 1;
        backgroundTemp = -300;
        backgroundImage = backgroundImageLevel1;
        obstacle.img.src = "Sprites/GalacticDangers/oiseau-transformed.png";
        
    } else if (score < 256267) {
        if(level !== 2){
            showLevel2();
        }
        level = 2;
        backgroundScrollY = 0 ;
        backgroundImage = backgroundImageLevel2;
        obstacle.img.src = "Sprites/GalacticDangers/Satélite-transformed.png";
        
    } else if (score < 384400 ){
        if(level !== 3){
            showLevel3();
        }
        level = 3;
        backgroundScrollY = 0 ;
        backgroundImage = backgroundImageLevel3;
        obstacle.img.src = "Sprites/GalacticDangers/meteore.png";
       
    } else {
        level = 4;
        gameWon();
    }

    return level;
}
