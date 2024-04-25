// Fonction pour afficher le "wall of fame" avec une image superposée
function displayWallOfFameWithOverlayImage() {
    // Créer un élément d'image pour l'image superposée
    const overlayImage = document.createElement('img');
    overlayImage.src = 'Sprites/wallOfFame.png'; // Remplacez par le chemin de votre image
    overlayImage.alt = 'Overlay Image';
    overlayImage.style.position = 'absolute';
    overlayImage.style.top = '0';
    overlayImage.style.left = '0';
    overlayImage.style.width = '500px';
    overlayImage.style.height = '800px';
    overlayImage.style.zIndex = '999'; // Assurez-vous que l'image est au-dessus de tous les autres éléments

    // Ajouter l'image superposée à la page
    document.body.appendChild(overlayImage);

    // Afficher le "Wall of Fame"
    displayWallOfFame();
}

// Fonction pour afficher le tableau des scores
function afficherTableauScores(scores) {
    // Création du tableau HTML
    const tableau = document.createElement('table');
    
    // Création de l'en-tête du tableau
    const entete = tableau.createTHead();
    const ligneEntete = entete.insertRow();
    const cellulePosition = ligneEntete.insertCell();
    const celluleNom = ligneEntete.insertCell();
    const celluleScore = ligneEntete.insertCell();
    cellulePosition.textContent = 'Position';
    celluleNom.textContent = 'Nom';
    celluleScore.textContent = 'Score';
    
    // Remplissage du tableau avec les données de scores
    const corps = tableau.createTBody();
    scores.forEach((score, index) => {
        const ligne = corps.insertRow();
        const cellulePosition = ligne.insertCell();
        const celluleNom = ligne.insertCell();
        const celluleScore = ligne.insertCell();
        cellulePosition.textContent = index + 1;
        celluleNom.textContent = score.username;
        celluleScore.textContent = score.score;
    });
    
    // Ajout du tableau à la page
    const containerTableau = document.getElementById('container-tableau');
    containerTableau.innerHTML = ''; // Videz le conteneur précédent
    containerTableau.appendChild(tableau);
}

// Exemple de données de scores
const scoresExemple = [
    { username: 'Joueur1', score: 100 },
    { username: 'Joueur2', score: 90 },
    { username: 'Joueur3', score: 80 }
];

// Appel de la fonction pour afficher le tableau des scores avec les données d'exemple
afficherTableauScores(scoresExemple);
