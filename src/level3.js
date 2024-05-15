class Level3 {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "level-3-container";
        this.container.style.backgroundImage = 'url("Sprites/Backgrounds/level3transition.png")'; // Changer le chemin d'accès à votre image de fond
        this.container.style.width = "1920px";
        this.container.style.height = "1080px";
        this.container.style.backgroundSize = "cover";
        this.container.style.position = "absolute"; // Position absolue pour superposer
        this.container.style.top = "0"; // Positionner au-dessus de la page d'accueil
        this.container.style.left = "0";
        this.container.style.zIndex = "9999"; // Assurer que le Wall of Fame apparaît au-dessus de la page d'accueil

        // Appel de la méthode pour afficher le contenu du Wall of Fame
    this.displayLevel3Content();

    // Ajouter le conteneur du Wall of Fame à la page
    document.body.appendChild(this.container);
}

displayLevel3Content() {

}

    removeLevel3Frame() {
        // Remove the container from the document
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
    }
}

// Fonction pour afficher le Wall of Fame lorsque vous cliquez sur le bouton
function showLevel3() {
    const level3 = new Level3();
    setTimeout(function() {
        level3.removeLevel3Frame();
    }, 3000); // Remove the frame after 3 seconds
    resetGame();
    difficulty = 3;
    yDistanceTravelled = 256267;
    score = 256267;
    showScore();
}



