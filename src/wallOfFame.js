class WallOfFame {
    constructor() {
        // Récupérer le nom d'utilisateur depuis le stockage local
        const username = localStorage.getItem("username");
        
        this.container = document.createElement("div");
        this.container.id = "wall-of-fame-container";
        this.container.style.width = "100%"; // Ajuster la largeur pour remplir la page
        this.container.style.height = "100vh"; // Ajuster la hauteur pour remplir la hauteur de la fenêtre
        this.container.style.position = "absolute"; // Position absolue pour superposer
        this.container.style.top = "0"; // Positionner au-dessus de la page d'accueil
        this.container.style.left = "0";
        this.container.style.zIndex = "9999"; // Assurer que le Wall of Fame apparaît au-dessus de la page d'accueil

        // Ajouter la vidéo de fond
        const video = document.createElement("video");
        video.src = "Sprites/WallOfFame.mp4"; // Remplacez par le chemin d'accès à votre vidéo
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
        video.autoplay = true;
        video.muted = true; // Supprimez cette ligne si vous voulez du son
        this.container.appendChild(video);
        
        // Créer un tableau pour afficher les scores
        const table = document.createElement("table");
        table.style.width = "70%"; // Réduire la largeur pour que le tableau ne soit pas trop large
        table.style.position = "fixed"; // Position fixe pour centrer
        table.style.top = "50%"; // Décalage de 50% vers le bas
        table.style.left = "50%"; // Décalage de 50% vers la droite
        table.style.transform = "translate(-50%, -50%)"; // Centrage
        table.style.borderCollapse = "collapse"; // Pour fusionner les bordures des cellules
        table.style.color = "black"; // Couleur du texte
        table.style.border = "2px solid white"; // Ajouter des bordures au tableau
        this.container.appendChild(table);

        // En-tête du tableau
        const tableHeaderRow = document.createElement("tr");
        tableHeaderRow.innerHTML = "<th style='font-weight: bold; border: 1px solid white;'>Position</th><th style='font-weight: bold; border: 1px solid white;'>Name</th><th style='font-weight: bold; border: 1px solid white;'>Score</th>";
        table.appendChild(tableHeaderRow);

        // Ajouter le score de l'utilisateur au tableau
        this.addUserScoreToTable(table, username);

        // Ajouter les scores des autres utilisateurs au tableau
        this.addScoresToTable(table, username);

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
    }

    displayWallOfFameContent() {
        // Récupérer le score enregistré dans le stockage local
        const lastScore = localStorage.getItem("lastScore");

        // Créer un paragraphe pour afficher le score
        const scoreParagraph = document.createElement("p");
        scoreParagraph.textContent = "Last Score: " + lastScore;
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

    addUserScoreToTable(table, username) {
        // Récupérer le score de l'utilisateur depuis le stockage local
        const userScore = localStorage.getItem("lastScore");
    
        // Créer une nouvelle ligne pour l'utilisateur
        const userRow = document.createElement("tr");
    
        // Créer et styliser les cellules de la ligne de l'utilisateur
        const positionCell = document.createElement("td");
        positionCell.textContent = "--";
        positionCell.style.cssText = "text-align: center; padding: 5px; font-weight: bold;";
        userRow.appendChild(positionCell);
    
        const nameCell = document.createElement("td");
        nameCell.textContent = username;
        nameCell.style.cssText = "text-align: center; padding: 5px; font-weight: bold;";
        userRow.appendChild(nameCell);
    
        const scoreCell = document.createElement("td");
        scoreCell.textContent = userScore;
        scoreCell.style.cssText = "text-align: center; padding: 5px; font-weight: bold;";
        userRow.appendChild(scoreCell);
    
        // Ajouter la ligne de l'utilisateur au tableau
        table.appendChild(userRow);
    }

    addScoresToTable(table, username) {
        // Récupérer tous les scores depuis le stockage local
        const scores = JSON.parse(localStorage.getItem("scores")) || [];

        // Trier les scores par ordre décroissant
        scores.sort((a, b) => b.score - a.score);

        // Ajouter les scores au tableau
        scores.forEach((score, index) => {
            if (score.username !== username) { // Ne pas inclure le score de l'utilisateur actuel
                const row = document.createElement("tr");
                row.innerHTML = `<td>${index + 1}</td><td>${score.username}</td><td>${score.score}</td>`;
                table.appendChild(row);
            }
        });
    }
}

// Fonction pour afficher le Wall of Fame lorsque vous cliquez sur le bouton
function showWallOfFame() {
    const wallOfFame = new WallOfFame();
}

// Sélectionnez votre bouton dans le DOM et ajoutez un gestionnaire d'événements
const wallOfFameButton = document.getElementById("votre-bouton-id"); // Remplacez "votre-bouton-id" par l'ID de votre bouton
wallOfFameButton.addEventListener("click", showWallOfFame);
