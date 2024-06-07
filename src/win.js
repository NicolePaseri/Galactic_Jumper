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

    // Créer un bouton pour rejouer
    var playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    Object.assign(playAgainButton.style, buttonStyle);
    playAgainButton.style.top = "50%";
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
    Object.assign(homeButton.style, buttonStyle);
    homeButton.style.top = "60%";
    homeButton.addEventListener("click", function() {
        sendScore();
        setTimeout(function() {
            location.reload();
        }, 1000); // attendre 1000 ms (1 seconde) avant de recharger
    });
    winScreenDiv.appendChild(homeButton);

    // Créer un bouton pour revenir au Wall of Fame
    var wallOfFameButton = document.createElement("button");
    wallOfFameButton.textContent = "Wall of Fame";
    Object.assign(wallOfFameButton.style, buttonStyle);
    wallOfFameButton.style.top = "70%";
    wallOfFameButton.addEventListener("click", function() {
        sendScore();
        setTimeout(function() {
            showWallOfFame();
        }, 1000); // attendre 1000 ms (1 seconde) avant de recharger
    });
    winScreenDiv.appendChild(wallOfFameButton);

    // Ajouter l'écran de victoire à la page
    document.body.appendChild(winScreenDiv);
}
