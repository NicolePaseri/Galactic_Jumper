class WallOfFame {
    constructor() {
        // Les autres éléments de construction restent inchangés
        this.container = document.createElement("div");
        this.container.id = "wall-of-fame-container";
        this.container.style.width = "100%";
        this.container.style.height = "100vh";
        this.container.style.position = "absolute";
        this.container.style.top = "0";
        this.container.style.left = "0";
        this.container.style.zIndex = "9999";
        this.container.style.backgroundColor = "rgba(0,0,0,0.8)"; // Fond légèrement transparent

        const video = document.createElement("video");
        video.src = "Sprites/WallOfFame.mp4";
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
        video.autoplay = true;
        video.muted = true;
        this.container.appendChild(video);

        // Styles communs pour les boutons
        const buttonStyle = {
            fontSize: "20px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#007BFF", // Couleur de fond bleu
            color: "white", // Texte en blanc
            border: "none", // Enlève les bordures
            padding: "10px 20px", // Espacement intérieur
            borderRadius: "5px", // Coins arrondis
            cursor: "pointer" // Changer le curseur en pointeur
        };

        const homeButton = document.createElement("button");
        homeButton.textContent = "Home";
        Object.assign(homeButton.style, buttonStyle);
        homeButton.style.bottom = "20px";
        homeButton.addEventListener("click", () => location.reload());
        this.container.appendChild(homeButton);

        this.scoresTable = document.createElement("table");
        this.scoresTable.style.position = "absolute";
        this.scoresTable.style.borderRadius = "8px"; // Ajoute des coins arrondis
        this.scoresTable.style.overflow = "hidden"; // Empêche le contenu débordant de rompre les coins arrondis
        this.scoresTable.style.top = "55%"; // Abaisse le tableau
        this.scoresTable.style.left = "50%";
        this.scoresTable.style.transform = "translate(-50%, -50%)";
        this.scoresTable.style.width = "80%";
        this.scoresTable.style.textAlign = "center";
        this.scoresTable.style.fontSize = "24px";
        this.scoresTable.style.color = "white"; // Texte en blanc
        this.scoresTable.style.borderCollapse = "collapse"; // Enlever les espaces entre les bordures
        this.container.appendChild(this.scoresTable);

        var restartButton = document.createElement("button");
        restartButton.textContent = "Play Again";
        Object.assign(restartButton.style, buttonStyle);
        restartButton.style.bottom = "90px"; // Remonte un peu le bouton "Play Again"
        restartButton.addEventListener("click", () => {
            showLevel1();
            document.body.removeChild(this.container);
        });
        this.container.appendChild(restartButton);

        document.body.appendChild(this.container);
    }

    displayScores(scores) {
        this.scoresTable.innerHTML = ''; // Clear previous scores
        const headerRow = this.scoresTable.insertRow();

        const headerCell1 = headerRow.insertCell();
        headerCell1.textContent = 'Rank';
        headerCell1.classList.add('table-cell');
        headerCell1.style.fontWeight = 'bold'; // Titres en gras
        headerCell1.style.textAlign = 'center'; // Contenu centré
        headerCell1.style.color = 'white'; // Texte en blanc

        const headerCell2 = headerRow.insertCell();
        headerCell2.textContent = 'Name';
        headerCell2.classList.add('table-cell');
        headerCell2.style.fontWeight = 'bold'; // Titres en gras
        headerCell2.style.textAlign = 'center'; // Contenu centré
        headerCell2.style.color = 'white'; // Texte en blanc

        const headerCell3 = headerRow.insertCell();
        headerCell3.textContent = 'Distance from Earth';
        headerCell3.classList.add('table-cell');
        headerCell3.style.fontWeight = 'bold'; // Titres en gras
        headerCell3.style.textAlign = 'center'; // Contenu centré
        headerCell3.style.color = 'white'; // Texte en blanc

        scores.forEach((score, index) => {
            const row = this.scoresTable.insertRow();

            const cell1 = row.insertCell();
            cell1.textContent = index + 1;
            cell1.classList.add('table-cell');
            cell1.style.textAlign = 'center'; // Contenu centré
            cell1.style.color = 'white'; // Texte en blanc

            const cell2 = row.insertCell();
            cell2.textContent = score.name;
            cell2.classList.add('table-cell');
            cell2.style.textAlign = 'center'; // Contenu centré
            cell2.style.color = 'white'; // Texte en blanc

            const cell3 = row.insertCell();
            cell3.textContent = `${score.score} km`;
            cell3.classList.add('table-cell');
            cell3.style.textAlign = 'center'; // Contenu centré
            cell3.style.color = 'white'; // Texte en blanc
        });
    }
}

function showWallOfFame() {
    const wallOfFame = new WallOfFame();
    fetchTopScores().then(scores => {
        wallOfFame.displayScores(scores);
    }).catch(error => {
        console.error("Failed to fetch scores:", error);
    });
}

// Sélectionnez votre bouton dans le DOM et ajoutez un gestionnaire d'événements
const wallOfFameButton = document.getElementById("votre-bouton-id"); // Remplacez "votre-bouton-id" par l'ID de votre bouton
wallOfFameButton.addEventListener("click", showWallOfFame);
