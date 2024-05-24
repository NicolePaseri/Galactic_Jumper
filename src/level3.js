class Level3 {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "level-3-container";
        this.container.style.width = "100vw";
        this.container.style.height = "100vh";
        this.container.style.position = "absolute"; // Position absolue pour superposer
        this.container.style.top = "0"; // Positionner au-dessus de la page d'accueil
        this.container.style.left = "0";
        this.container.style.zIndex = "9999"; // Assurer que le Wall of Fame apparaît au-dessus de la page d'accueil

        // Ajouter la vidéo de fond
        const video = document.createElement("video");
        video.src = "Sprites/Video3.mp4"; // Remplacez par le chemin d'accès à votre vidéo
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
       video.autoplay = true;
        video.muted = true; // Supprimez cette ligne si vous voulez du son
        this.container.appendChild(video);

        // Appel de la méthode pour afficher le contenu du Level 3
        this.displayLevel3Content();

        // Ajouter le conteneur du Level 3 à la page
        document.body.appendChild(this.container);
    }

    displayLevel3Content() {
        // Vous pouvez ajouter ici tout autre contenu spécifique au Level 3
    }

    removeLevel3Frame() {
        // Remove the container from the document
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
    }
}

// Fonction pour afficher le Level 3 lorsque vous cliquez sur le bouton
function showLevel3() {
    const level3 = new Level3();
    isPaused = true;
    setTimeout(function() {
        level3.removeLevel3Frame();
    }, 3000); // Remove the frame after 3 seconds
}
