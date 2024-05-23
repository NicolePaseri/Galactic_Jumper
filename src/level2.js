class Level2 {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "level-2-container";
        this.container.style.width = "100vw";
        this.container.style.height = "100vh";
        this.container.style.position = "absolute"; // Position absolue pour superposer
        this.container.style.top = "0"; // Positionner au-dessus de la page d'accueil
        this.container.style.left = "0";
        this.container.style.zIndex = "9999"; // Assurer que le Wall of Fame apparaît au-dessus de la page d'accueil

        // Ajouter la vidéo de fond
        const video = document.createElement("video");
        video.src = "Sprites/video2.mp4"; // Remplacez par le chemin d'accès à votre vidéo
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
        video.autoplay = true;
        video.muted = true; // Supprimez cette ligne si vous voulez du son
        this.container.appendChild(video);

        // Ajouter le conteneur du Level 2 à la page
        document.body.appendChild(this.container);
    }

    removeLevel2Frame() {
        // Remove the container from the document
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
    }
}

// Fonction pour afficher le Level 2 lorsque vous cliquez sur le bouton
function showLevel2() {
    const level2 = new Level2();
    isPaused = true;
    setTimeout(function() {
        level2.removeLevel2Frame();
    }, 3000); // Remove the frame after 3 seconds
    isPaused = false;
}
