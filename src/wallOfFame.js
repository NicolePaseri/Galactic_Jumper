// Création de la classe WallOfFame
class WallOfFame {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "wall-of-fame-container";
        this.container.style.backgroundImage = 'url("Sprites/wallOfFame.png")'; // Changer le chemin d'accès à votre image de fond
        this.container.style.width = "1920px";
        this.container.style.height = "1080px";
        this.container.style.backgroundSize = "cover";
        this.container.style.position = "absolute"; // Position absolue pour superposer
        this.container.style.top = "0"; // Positionner au-dessus de la page d'accueil
        this.container.style.left = "0";
        this.container.style.zIndex = "9999"; // Assurer que le Wall of Fame apparaît au-dessus de la page d'accueil

        // Ajouter le contenu du Wall of Fame
        const wallOfFameContent = document.createElement("p");
        wallOfFameContent.textContent = "Wall of Fame Content"; // Remplacez par le contenu du Wall of Fame
        wallOfFameContent.style.fontSize = "24px";
        wallOfFameContent.style.color = "white";
        wallOfFameContent.style.position = "absolute";
        wallOfFameContent.style.top = "50%";
        wallOfFameContent.style.left = "50%";
        wallOfFameContent.style.transform = "translate(-50%, -50%)";
        wallOfFameContent.style.textAlign = "center";
        this.container.appendChild(wallOfFameContent);

        // Créer un bouton pour revenir à la page d'accueil
        const homeButton = document.createElement("button");
        homeButton.textContent = "Home";
        homeButton.style.fontSize = "20px";
        homeButton.style.position = "absolute";
        homeButton.style.top = "70%";
        homeButton.style.left = "50%";
        homeButton.style.transform = "translateX(-50%)";
        homeButton.addEventListener("click", () => {
            location.reload();
        });
        this.container.appendChild(homeButton);

        // Ajouter le conteneur du Wall of Fame à la page
        document.body.appendChild(this.container);
    }
}

// Fonction pour afficher le Wall of Fame lorsque vous cliquez sur le bouton
function showWallOfFame() {
    const wallOfFame = new WallOfFame();
}

// Sélectionnez votre bouton dans le DOM et ajoutez un gestionnaire d'événements
const wallOfFameButton = document.getElementById("votre-bouton-id"); // Remplacez "votre-bouton-id" par l'ID de votre bouton
wallOfFameButton.addEventListener("click", showWallOfFame);
