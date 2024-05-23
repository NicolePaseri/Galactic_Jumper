function gameWon() {
    console.log("Congratulations, You Win!");
    // Mettre le jeu en pause ou arrêter les actions en cours, si nécessaire

    // Supprimer le canevas du jeu
    c.parentNode.removeChild(c);

    var winScreenDiv = document.createElement("div");
    winScreenDiv.id = "win-screen-div";
    winScreenDiv.style.width = 100 + "vw";
    winScreenDiv.style.height = 100 + "vh";
    winScreenDiv.style.position = "relative"; // Position relative pour les enfants positionnés

    // Ajouter la vidéo de fond
    const video = document.createElement("video");
    video.src = "Sprites/Victory.mp4"; // Remplacez par le chemin d'accès à votre vidéo
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.autoplay = true;
    video.loop = true;
    video.muted = true; // Supprimez cette ligne si vous voulez du son
    winScreenDiv.appendChild(video);

    // Créer un bouton pour rejouer
    var playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.style.fontSize = "20px";
    playAgainButton.style.position = "absolute";
    playAgainButton.style.top = "50%";
    playAgainButton.style.left = "50%";
    playAgainButton.style.transform = "translate(-50%, -50%)";
    playAgainButton.addEventListener("click", function() {
        // Appeler la fonction pour recommencer le jeu
        resetGame();
        // Supprimer l'écran de victoire après le redémarrage du jeu
        document.body.removeChild(winScreenDiv);
    });
    winScreenDiv.appendChild(playAgainButton);

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
    winScreenDiv.appendChild(homeButton);

    // Créer un bouton pour revenir au Wall of Fame
    var wallOfFameButton = document.createElement("button");
    wallOfFameButton.textContent = "Wall of Fame";
    wallOfFameButton.style.fontSize = "20px";
    wallOfFameButton.style.position = "absolute";
    wallOfFameButton.style.top = "70%";
    wallOfFameButton.style.left = "50%";
    wallOfFameButton.style.transform = "translate(-50%, -50%)";
    wallOfFameButton.addEventListener("click", function() {
        showWallOfFame();
    });
    winScreenDiv.appendChild(wallOfFameButton);

    // Ajouter l'écran de victoire à la page
    document.body.appendChild(winScreenDiv);
}
