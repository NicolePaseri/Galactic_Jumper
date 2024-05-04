class WallOfFame {
    constructor() {
        // Récupérer le nom d'utilisateur depuis le stockage local
        const username = localStorage.getItem("username");
        
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

        // Créer un paragraphe pour afficher le nom d'utilisateur et le score
        const userScoreParagraph = document.createElement("p");
        userScoreParagraph.textContent = `Player: ${username}`;
        userScoreParagraph.style.fontSize = "24px";
        userScoreParagraph.style.color = "white";
        userScoreParagraph.style.position = "absolute";
        userScoreParagraph.style.top = "40%";
        userScoreParagraph.style.left = "50%";
        userScoreParagraph.style.transform = "translate(-50%, -50%)";
        userScoreParagraph.style.textAlign = "center";
        this.container.appendChild(userScoreParagraph);

        // Créer un paragraphe pour afficher le score
        this.scoreParagraph = document.createElement("p");
        this.scoreParagraph.style.fontSize = "24px";
        this.scoreParagraph.style.color = "white";
        this.scoreParagraph.style.position = "absolute";
        this.scoreParagraph.style.top = "50%";
        this.scoreParagraph.style.left = "50%";
        this.scoreParagraph.style.transform = "translate(-50%, -50%)";
        this.scoreParagraph.style.textAlign = "center";
        this.container.appendChild(this.scoreParagraph);

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

        // Appel de la méthode pour afficher le contenu du Wall of Fame
        this.displayWallOfFameContent();

        // Ajouter le conteneur du Wall of Fame à la page
        document.body.appendChild(this.container);
    }

    displayWallOfFameContent() {
        // Récupérer le score enregistré dans le stockage local
        const lastScore = localStorage.getItem("lastScore");

        // Afficher le score dans le paragraphe approprié
        this.scoreParagraph.textContent = "Last Score: " + lastScore;
    }
}

// Fonction pour afficher le Wall of Fame lorsque vous cliquez sur le bouton
function showWallOfFame() {
    const wallOfFame = new WallOfFame();
}

// Sélectionnez votre bouton dans le DOM et ajoutez un gestionnaire d'événements
const wallOfFameButton = document.getElementById("votre-bouton-id"); // Remplacez "votre-bouton-id" par l'ID de votre bouton
wallOfFameButton.addEventListener("click", showWallOfFame);