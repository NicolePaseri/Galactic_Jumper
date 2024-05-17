class Level1 {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "level-1-container";
        this.container.style.width = "1920px";
        this.container.style.height = "1080px";
        this.container.style.position = "absolute"; // Position absolue pour superposer
        this.container.style.top = "0"; // Positionner au-dessus de la page d'accueil
        this.container.style.left = "0";
        this.container.style.zIndex = "9999"; // Assurer que le Wall of Fame apparaît au-dessus de la page d'accueil

        // Ajouter la vidéo de fond
        const video = document.createElement("video");
        video.src = "Sprites/video1.mp4"; // Remplacez par le chemin d'accès à votre vidéo
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
        video.autoplay = true;
        video.muted = true; // Supprimez cette ligne si vous voulez du son
        this.container.appendChild(video);
      
    removeLevel1Frame() {
        // Remove the container from the document
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
    }
}

// Fonction pour afficher le Level 1 lorsque vous cliquez sur le bouton
function showLevel1() {
    const level1 = new Level1();
    setTimeout(function() {
        level1.removeLevel1Frame();
    }, 3000); // Remove the frame after 3 seconds
    resetGame();
}
