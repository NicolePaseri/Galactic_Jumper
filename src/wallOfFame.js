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
