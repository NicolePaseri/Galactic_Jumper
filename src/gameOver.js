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

    // Styles communs pour les boutons
    const buttonStyle = {
        fontSize: "20px",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#007BFF", // Couleur de fond bleu
        color: "white", // Texte en blanc
        border: "none", // Enlève les bordures
        padding: "10px 20px", // Espacement intérieur
        borderRadius: "5px", // Coins arrondis
        cursor: "pointer" // Changer le curseur en pointeur
    };

    // Créer un bouton pour redémarrer le jeu
    var restartButton = document.createElement("button");
    restartButton.textContent = "Play Again";
    Object.assign(restartButton.style, buttonStyle);
    restartButton.style.top = "70%";
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
    Object.assign(homeButton.style, buttonStyle);
    homeButton.style.top = "80%";
    homeButton.addEventListener("click", function() {
        sendScore();
        setTimeout(function() {
            location.reload();
        }, 1000); // attendre 1000 ms (1 seconde) avant de recharger
    });
    gameOverDiv.appendChild(homeButton);

    // Créer un bouton pour accéder au Wall of Fame
    var wallOfFameButton = document.createElement("button");
    wallOfFameButton.textContent = "Wall of Fame";
    Object.assign(wallOfFameButton.style, buttonStyle);
    wallOfFameButton.style.top = "60%";
    wallOfFameButton.addEventListener("click", function() {
        showWallOfFame();
        document.body.removeChild(gameOverDiv);
        sendScore();
        setTimeout(function() {
            showWallOfFame();
        }, 1000); // attendre 1000 ms (1 seconde) avant de recharger$
    });
    gameOverDiv.appendChild(wallOfFameButton);

    // Ajouter la div de fin de partie à la page
    document.body.appendChild(gameOverDiv);
}
