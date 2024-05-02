function gameWon() {
    console.log("Congratulations, You Win!");
    // Mettre le jeu en pause ou arrêter les actions en cours, si nécessaire

    // Supprimer le canevas du jeu
    c.parentNode.removeChild(c);

    var winScreenDiv = document.createElement("div");
    winScreenDiv.id = "win-screen-div";
    winScreenDiv.style.backgroundImage = 'url("Sprites/backgroundWin.png")'; // Changer le chemin d'accès à votre image de victoire
    winScreenDiv.style.width = 1920 + "px";
    winScreenDiv.style.height = 1080 + "px";
    winScreenDiv.style.backgroundSize = "cover";

    // Créer un bouton pour rejouer
    var playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.style.fontSize = "20px";
    playAgainButton.style.position = "absolute";
    playAgainButton.style.top = "50%";
    playAgainButton.style.left = "50%";
    playAgainButton.style.transform = "translateX(-50%)";
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
    homeButton.style.transform = "translateX(-50%)";
    homeButton.addEventListener("click", function() {
        // Rediriger vers la page d'accueil
        // Insérez ici le code pour rediriger vers la page d'accueil de votre jeu
    });
    winScreenDiv.appendChild(homeButton);

    // Créer un bouton pour revenir wall of fame
    var wallOfFameButton = document.createElement("button");
    wallOfFameButton.textContent = "Wall of Fame";
    wallOfFameButton.style.fontSize = "20px";
    wallOfFameButton.style.position = "absolute";
    wallOfFameButton.style.top = "70%";
    wallOfFameButton.style.left = "50%";
    wallOfFameButton.style.transform = "translateX(-50%)";
    wallOfFameButton.addEventListener("click", function() {
        // Rediriger vers la page d'accueil
        // Insérez ici le code pour rediriger vers la page d'accueil de votre jeu
    });
    winScreenDiv.appendChild(wallOfFameButton);

    // Ajouter l'écran de victoire à la page
    document.body.appendChild(winScreenDiv);
}
