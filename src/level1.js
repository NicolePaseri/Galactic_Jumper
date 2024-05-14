class Level1 {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "level-1-container";
        this.container.style.backgroundImage = 'url("Sprites/Backgrounds/level1transition.png")'; // Changer le chemin d'accès à votre image de fond
        this.container.style.width = "1920px";
        this.container.style.height = "1080px";
        this.container.style.backgroundSize = "cover";
        this.container.style.position = "absolute"; // Position absolue pour superposer
        this.container.style.top = "0"; // Positionner au-dessus de la page d'accueil
        this.container.style.left = "0";
        this.container.style.zIndex = "9999"; // Assurer que le Wall of Fame apparaît au-dessus de la page d'accueil

        // Ajouter le contenu du Wall of Fame
        const Level1Content = document.createElement("p");
        Level1Content.textContent = "Level 1 Content"; // Remplacez par le contenu du Wall of Fame
        Level1Content.style.fontSize = "24px";
        Level1Content.style.color = "white";
        Level1Content.style.position = "absolute";
        Level1Content.style.top = "50%";
        Level1Content.style.left = "50%";
        Level1Content.style.transform = "translate(-50%, -50%)";
        Level1Content.style.textAlign = "center";
        this.container.appendChild(Level1Content);

        // Appel de la méthode pour afficher le contenu du Wall of Fame
        this.displayLevel1Content();

        // Ajouter le conteneur du Wall of Fame à la page
        document.body.appendChild(this.container);
    }

    displayLevel1Content() {

        // Créer un paragraphe pour afficher le score
        const scoreParagraph = document.createElement("p");
        scoreParagraph.textContent = "Level 1";
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
    removeLevel1Frame() {
        // Remove the container from the document
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
    }
}

// Fonction pour afficher le Wall of Fame lorsque vous cliquez sur le bouton
function showLevel1() {
    const level1 = new Level1();
    setTimeout(function() {
        level1.removeLevel1Frame();
    }, 3000); // Remove the frame after 3 seconds
    resetGame();
}



