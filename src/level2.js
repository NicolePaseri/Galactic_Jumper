class Level2 {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "level-2-container";
        this.container.style.backgroundImage = 'url("Sprites/AlienBackGround.png")'; // Changer le chemin d'accès à votre image de fond
        this.container.style.width = "1920px";
        this.container.style.height = "1080px";
        this.container.style.backgroundSize = "cover";
        this.container.style.position = "absolute"; // Position absolue pour superposer
        this.container.style.top = "0"; // Positionner au-dessus de la page d'accueil
        this.container.style.left = "0";
        this.container.style.zIndex = "9999"; // Assurer que le Wall of Fame apparaît au-dessus de la page d'accueil

        // Ajouter le contenu du Wall of Fame
        const Level2Content = document.createElement("p");
        Level2Content.textContent = "Level 2 Content"; // Remplacez par le contenu du Wall of Fame
        Level2Content.style.fontSize = "24px";
        Level2Content.style.color = "white";
        Level2Content.style.position = "absolute";
        Level2Content.style.top = "50%";
        Level2Content.style.left = "50%";
        Level2Content.style.transform = "translate(-50%, -50%)";
        Level2Content.style.textAlign = "center";
        this.container.appendChild(Level2Content);

        // Appel de la méthode pour afficher le contenu du Wall of Fame
        this.displayLevel2Content();

        // Ajouter le conteneur du Wall of Fame à la page
        document.body.appendChild(this.container);
    }

    displayLevel2Content() {

        // Créer un paragraphe pour afficher le score
        const scoreParagraph = document.createElement("p");
        scoreParagraph.textContent = "Level 2";
        scoreParagraph.style.fontSize = "24px";
        scoreParagraph.style.color = "white";
        scoreParagraph.style.position = "absolute";
        scoreParagraph.style.top = "40%";
        scoreParagraph.style.left = "50%";
        scoreParagraph.style.transform = "translate(-50%, -50%)";
        scoreParagraph.style.textAlign = "center";

        // Ajouter le paragraphe au contenu du Wall of Fame
        this.container.appendChild(scoreParagraph);
    }
    removeLevel2Frame() {
        // Remove the container from the document
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
    }
}

// Fonction pour afficher le Wall of Fame lorsque vous cliquez sur le bouton
function showLevel2() {
    const level2 = new Level2();
    setTimeout(function() {
        level2.removeLevel2Frame();
    }, 3000); // Remove the frame after 3 seconds
    resetGame();
    difficulty = 2;
    yDistanceTravelled = 128133;
    score = 128133;
    showScore();
}



