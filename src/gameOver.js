function gameOver() {
    console.log("Game Over!");
    dead = true;
    
    localStorage.setItem("lastScore", score);
    
    // Supprimer le canevas du jeu
    c.parentNode.removeChild(c);

    var gameOverDiv = document.createElement("div");
    gameOverDiv.id = "game-over-div";
    gameOverDiv.style.width = 100 + "vw";
    gameOverDiv.style.height = 100 + "vh";
    gameOverDiv.style.position = "relative"; // Position relative pour les enfants positionnés

    // Ajouter la vidéo de fond
    const video = document.createElement("video");
    video.src = "Sprites/GameOver.mp4"; // Remplacez par le chemin d'accès à votre vidéo
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.position = 'absolute';
    video.style.top = '50%';
    video.style.left = '50%';
    video.style.transform = 'translate(-50%, -50%)';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover'; // Assurez-vous que la vidéo couvre l'ensemble du conteneur
    gameOverDiv.appendChild(video);

    // Créer un bouton pour redémarrer le jeu
    var restartButton = document.createElement("button");
    restartButton.textContent = "Play Again";
    restartButton.style.fontSize = "20px";
    restartButton.style.position = "absolute";
    restartButton.style.top = "70%";
    restartButton.style.left = "50%";
    restartButton.style.transform = "translate(-50%, -50%)";
    restartButton.addEventListener("click", function() {
        // Appeler la fonction resetGame pour redémarrer le jeu
        showLevel1();
        // Supprimer la div de fin de partie après le redémarrage du jeu
        document.body.removeChild(gameOverDiv);
    });
    gameOverDiv.appendChild(restartButton);
    
    // Créer un bouton pour revenir à la page d'accueil
    var homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.style.fontSize = "20px";
    homeButton.style.position = "absolute";
    homeButton.style.top = "60%";
    homeButton.style.left = "50%";
    homeButton.style.transform = "translate(-50%, -50%)";
    homeButton.addEventListener("click", function() {
        location.reload();
    });
    gameOverDiv.appendChild(homeButton);

    // Créer un bouton pour accéder au Wall of Fame
    var wallOfFameButton = document.createElement("button");
    wallOfFameButton.textContent = "Wall of Fame";
    wallOfFameButton.style.fontSize = "20px";
    wallOfFameButton.style.position = "absolute";
    wallOfFameButton.style.top = "50%";
    wallOfFameButton.style.left = "50%";
    wallOfFameButton.style.transform = "translate(-50%, -50%)";
    wallOfFameButton.addEventListener("click", function() {
        document.body.removeChild(gameOverDiv);
        showWallOfFame();
    });
    gameOverDiv.appendChild(wallOfFameButton);

    // Ajouter la div de fin de partie à la page
    document.body.appendChild(gameOverDiv);
}
