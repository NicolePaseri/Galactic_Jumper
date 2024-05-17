class BackToLevel3 {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "back-to-level-3-container";
        this.container.style.width = "1920px";
        this.container.style.height = "1080px";
        this.container.style.position = "absolute"; // Position absolue pour superposer
        this.container.style.top = "0"; // Positionner au-dessus de la page d'accueil
        this.container.style.left = "0";
        this.container.style.zIndex = "9999"; // Assurer que le Wall of Fame apparaît au-dessus de la page d'accueil

        // Ajouter la vidéo de fond
        const video = document.createElement("video");
        video.src = "Sprites/Alien.mp4"; // Remplacez par le chemin d'accès à votre vidéo
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
        video.autoplay = true;
        video.loop = true; // Supprimez cette ligne si vous ne voulez pas que la vidéo boucle
        video.muted = true; // Supprimez cette ligne si vous voulez du son
        video.style.position = "absolute";
        video.style.top = "0";
        video.style.left = "0";
        this.container.appendChild(video);

        // Ajouter le contenu du message
        const BackToLevel3Content = document.createElement("p");
        BackToLevel3Content.textContent = "Back to level 3 Content"; // Remplacez par le contenu du Wall of Fame
        BackToLevel3Content.style.fontSize = "24px";
        BackToLevel3Content.style.color = "white";
        BackToLevel3Content.style.position = "absolute";
        BackToLevel3Content.style.top = "50%";
        BackToLevel3Content.style.left = "50%";
        BackToLevel3Content.style.transform = "translate(-50%, -50%)";
        BackToLevel3Content.style.textAlign = "center";
        BackToLevel3Content.style.zIndex = "1"; // Assurez-vous que le contenu est au-dessus de la vidéo
        this.container.appendChild(BackToLevel3Content);

        // Appel de la méthode pour afficher le contenu du message
        this.displayBackToLevel3Content();

        // Ajouter le conteneur à la page
        document.body.appendChild(this.container);
    }

    displayBackToLevel3Content() {
        // Créer un paragraphe pour afficher le message
        const scoreParagraph = document.createElement("p");
        scoreParagraph.textContent = "Oh no! An alien brings you back to level 3";
        scoreParagraph.style.fontSize = "24px";
        scoreParagraph.style.color = "white";
        scoreParagraph.style.position = "absolute";
        scoreParagraph.style.top = "40%";
        scoreParagraph.style.left = "50%";
        scoreParagraph.style.transform = "translate(-50%, -50%)";
        scoreParagraph.style.textAlign = "center";
        scoreParagraph.style.zIndex = "1"; // Assurez-vous que le paragraphe est au-dessus de la vidéo

        // Ajouter le paragraphe au contenu du message
        this.container.appendChild(scoreParagraph);
    }

    removeBackToLevel3Frame() {
        // Remove the container from the document
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
    }
}

// Fonction pour afficher le message lorsque vous cliquez sur le bouton
function showBackToLevel3() {
    const backToLevel3 = new BackToLevel3();
    setTimeout(function() {
        backToLevel3.removeBackToLevel3Frame();
    }, 3000); // Remove the frame after 3 seconds
    difficulty = 3;
    yDistanceTravelled = 256267;
    score = 256267;
    showScore();
}
