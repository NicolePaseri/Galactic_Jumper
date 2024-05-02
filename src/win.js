// Fonction pour afficher le message de victoire
function win() {
    console.log("You win !");
    ctx.clearRect(0, 0, screenWidth, screenHeight);
    ctx.drawImage(backgroundImageWin, 0, 0, screenWidth, screenHeight);

    ctx.font = "25px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("The astronaut archived the mission!", screenWidth / 2, screenHeight * 0.75); 
    ctx.font = "36px Arial";
    ctx.fillText("Press espace to restart", screenWidth / 2, (screenHeight * 0.75) + 50);
dead = true;
}