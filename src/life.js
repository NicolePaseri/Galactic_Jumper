// Lives

function drawLives() {
    for (let i = 0; i < lives; i++) {
        let heartImg = new Image();
        heartImg.src = "Sprites/heart.png";
        ctx.drawImage(heartImg, screenWidth - (i + 1) * 30, 5, 25, 25);
    }
}

function loseLife() {
    if(canLoseLife) {
        lives--; 
        canLoseLife = false;
        isBlinking = true;
        console.log("You lose a life");
        if (lives <= 0) {
            gameOver();
        }
        setTimeout(function(){canLoseLife = true; isBlinking = false;}, 2000)    
    }
}

function gameOver() {
    console.log("GameOver !");
    ctx.font = "25px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("The astronaut failed the mission!", screenWidth / 2, screenHeight / 2); 
            ctx.font = "36px Arial";
            ctx.fillText("Press espace to restart", screenWidth / 2, (screenHeight / 2) + 50);
    dead = true;
}