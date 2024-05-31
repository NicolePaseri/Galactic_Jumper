class WallOfFame {
    constructor() {
        // Créer et configurer le conteneur principal pour le mur des célébrités
        this.container = document.createElement("div");
        this.container.id = "wall-of-fame-container";
        this.container.style.width = "100%";
        this.container.style.height = "100vh";
        this.container.style.position = "absolute";
        this.container.style.top = "0";
        this.container.style.left = "0";
        this.container.style.zIndex = "9999";

        // Ajouter la vidéo de fond
        const video = document.createElement("video");
        video.src = "Sprites/WallOfFame.mp4"; // Remplacez par le chemin d'accès à votre vidéo
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
        video.autoplay = true;
        video.muted = true;
        this.container.appendChild(video);

        // Créer un bouton pour revenir à la page d'accueil
        const homeButton = document.createElement("button");
        homeButton.textContent = "Home";
        homeButton.style.fontSize = "20px";
        homeButton.style.position = "absolute";
        homeButton.style.bottom = "20px";
        homeButton.style.left = "50%";
        homeButton.style.transform = "translateX(-50%)";
        homeButton.addEventListener("click", () => {
            location.reload();
        });
        this.container.appendChild(homeButton);

        // Ajouter le conteneur du Wall of Fame à la page
        document.body.appendChild(this.container);
        console.log("Wall of Fame container added to the document body");
    }
}

// Fonction pour afficher le Wall of Fame lorsque vous cliquez sur le bouton
function showWallOfFame() {
    console.log("showWallOfFame called");
    const wallOfFame = new WallOfFame();
}

// Sélectionnez votre bouton dans le DOM et ajoutez un gestionnaire d'événements
const wallOfFameButton = document.getElementById("votre-bouton-id"); // Remplacez "votre-bouton-id" par l'ID de votre bouton
if (wallOfFameButton) {
    wallOfFameButton.addEventListener("click", showWallOfFame);
    console.log("Event listener added to wallOfFameButton");
} else {
    console.log("Button with ID 'votre-bouton-id' not found");
}
