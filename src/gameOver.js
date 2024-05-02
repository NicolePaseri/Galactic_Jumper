function gameOver() {
    console.log("GameOver !");
    dead = true;
    
    // Supprimer le canevas du jeu
    c.parentNode.removeChild(c);

    var gameOverDiv = document.createElement("div");
    gameOverDiv.id = "game-over-div";
    gameOverDiv.style.backgroundImage = 'url("Sprites/MissionFailed.png")';
    gameOverDiv.style.width = 1920 + "px";
    gameOverDiv.style.height = 1080 + "px";
    gameOverDiv.style.backgroundSize = "cover";
    

    // Créer un bouton pour redémarrer le jeu
    var restartButton = document.createElement("button");
    restartButton.textContent = "Play Again";
    restartButton.style.fontSize = "20px";
    restartButton.style.position = "absolute";
    restartButton.style.top = "60%";
    restartButton.style.left = "50%";
    restartButton.style.transform = "translateX(-50%)";
    restartButton.addEventListener("click", function() {
        // Appeler la fonction resetGame pour redémarrer le jeu
        resetGame();
        // Supprimer la div de fin de partie après le redémarrage du jeu
        document.body.removeChild(gameOverDiv);
    });
    gameOverDiv.appendChild(restartButton);

    // Créer un bouton pour revenir à la page d'accueil
    var homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.style.fontSize = "20px";
    homeButton.style.position = "absolute";
    homeButton.style.top = "70%";
    homeButton.style.left = "50%";
    homeButton.style.transform = "translateX(-50%)";
    homeButton.addEventListener("click", function() {
        // Rediriger vers la page d'accueil
        // Insérez ici le code pour rediriger vers la page d'accueil de votre jeu
    });
    gameOverDiv.appendChild(homeButton);

    // Ajouter la div de fin de partie à la page
    document.body.appendChild(gameOverDiv);
}
