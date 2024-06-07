class WallOfFame {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "wall-of-fame-container";
        this.container.style.width = "100%";
        this.container.style.height = "100vh";
        this.container.style.position = "absolute";
        this.container.style.top = "0";
        this.container.style.left = "0";
        this.container.style.zIndex = "9999";

        const video = document.createElement("video");
        video.src = "Sprites/WallOfFame.mp4";
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
        video.autoplay = true;
        video.muted = true;
        this.container.appendChild(video);

        const homeButton = document.createElement("button");
        homeButton.textContent = "Home";
        homeButton.style.fontSize = "20px";
        homeButton.style.position = "absolute";
        homeButton.style.bottom = "20px";
        homeButton.style.left = "50%";
        homeButton.style.transform = "translateX(-50%)";
        homeButton.addEventListener("click", () => location.reload());
        this.container.appendChild(homeButton);

        this.scoresList = document.createElement("ul");
        this.scoresList.style.position = "absolute";
        this.scoresList.style.top = "50%";
        this.scoresList.style.left = "50%";
        this.scoresList.style.transform = "translate(-50%, -50%)"; // Perfect centering (horizontally and vertically)
        this.scoresList.style.width = "100%";
        this.scoresList.style.textAlign = "center";
        this.scoresList.style.fontSize = "24px";
        this.scoresList.style.listStyleType = "none";
        this.scoresList.style.padding = "0";
        this.scoresList.style.margin = "0"; // Remove default margins
        this.container.appendChild(this.scoresList);


        document.body.appendChild(this.container);
    }

    displayScores(scores) {
        this.scoresList.innerHTML = ''; // Clear previous scores
        scores.forEach((score, index) => {
            const scoreElement = document.createElement("li");
            scoreElement.textContent = `${index + 1}. ${score.name}: ${score.score}`;
            scoreElement.style.color = "white"; // Make sure each score is also white
            this.scoresList.appendChild(scoreElement);
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
