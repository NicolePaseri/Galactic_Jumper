// Création des éléments de la page
const body = document.body;
const container = document.createElement('div');
container.id = 'homepage';
container.style.position = 'relative'; // Position relative pour le conteneur
container.style.width = '100vw'; // Utilisez 100% de la largeur de la fenêtre
container.style.height = '100vh'; // Utilisez 100% de la hauteur de la fenêtre
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.overflow = 'hidden'; // Assurez-vous que le contenu supplémentaire est masqué

// Ajout de la vidéo de fond
const videoBackground = document.createElement('video');
videoBackground.src = 'Sprites/HomePage.mp4'; // Remplacez par le chemin de votre vidéo
videoBackground.autoplay = true;
videoBackground.loop = true;
videoBackground.muted = true;
videoBackground.style.position = 'absolute';
videoBackground.style.top = '50%';
videoBackground.style.left = '50%';
videoBackground.style.transform = 'translate(-50%, -50%)';
videoBackground.style.width = '100%';
videoBackground.style.height = '100%';
videoBackground.style.objectFit = 'cover'; // Assurez-vous que la vidéo couvre l'ensemble du conteneur

container.appendChild(videoBackground); // Ajoute la vidéo au conteneur

const input = document.createElement('input');
input.placeholder = 'Enter your username';
input.style.marginBottom = '10px';
input.style.zIndex = '1'; // Assurez-vous que l'input est au-dessus de la vidéo

const startButton = document.createElement('button');
startButton.textContent = 'START TO PLAY';
startButton.style.marginBottom = '10px'; 
startButton.style.zIndex = '1'; 
startButton.addEventListener('click', () => {
    let username = input.value.trim();
    if (username !== '') {
        // Use a DOM purify to ensure security
        const cleanUsername = DOMPurify.sanitize(username);

        if (cleanUsername === username) {
            
            localStorage.setItem("username", cleanUsername);

            container.style.display = 'none';

            console.log(`Starting to play with ${cleanUsername}`);
            createUserIfNotExists(cleanUsername);
            showLevel1();
            
        } else {
            alert('Your username contained invalid characters and was sanitized. Please try again.');
        }
    } else {
        alert('You must enter a username to play');
    }

    // Récupération de la localisation une fois que l'utilisateur a cliqué sur "Starting to play"
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
          
            // Utilisez les coordonnées ici, par exemple :
            console.log("Latitude :", latitude);
            console.log("Longitude :", longitude);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
});

// Bouton "Choose Character" avec image
const chooseCharacterButton = document.createElement('button');
const chooseCharacterIcon = document.createElement('img');
chooseCharacterIcon.src = 'Sprites/Button/boutonPersonnages.png'; // Chemin de l'image
chooseCharacterIcon.alt = 'Choose Character'; // Texte alternatif pour l'image
chooseCharacterIcon.style.width = '80px'; // Définir la largeur de l'icône
chooseCharacterIcon.style.height = '80px'; // Définir la hauteur de l'icône
chooseCharacterButton.style.padding = '5px'; // Ajoutez un peu d'espace autour de l'icône
chooseCharacterButton.style.border = 'none'; // Supprimez la bordure du bouton
chooseCharacterButton.style.background = 'none'; // Supprimez le fond du bouton
chooseCharacterButton.style.marginBottom = '10px'; // Ajouter un marginBottom pour espacer les éléments
chooseCharacterButton.style.zIndex = '1'; // Assurez-vous que le bouton est au-dessus de la vidéo
chooseCharacterButton.appendChild(chooseCharacterIcon); // Ajoute l'image au bouton
chooseCharacterButton.addEventListener('click', function() {
    showCharacter();
});

const rulesButton = document.createElement('button');
const img = document.createElement('img');
img.src = 'Sprites/Button/information.png'; // Remplacez par l'URL de votre image
img.alt = 'Rules of Galactic Jumper'; // Texte alternatif pour l'image
img.style.height = '40px'; // Vous pouvez ajuster la taille de l'image
img.style.width = '40px'; // Vous pouvez ajuster la taille de l'image
rulesButton.style.padding = '5px'; // Ajoutez un peu d'espace autour de l'icône
rulesButton.style.border = 'none'; // Supprimez la bordure du bouton
rulesButton.style.background = 'none'; // Supprimez le fond du bouton
rulesButton.style.marginBottom = '10px';
rulesButton.style.zIndex = '1'; // Assurez-vous que le bouton est au-dessus de la vidéo
rulesButton.appendChild(img); // Ajoute l'image au bouton
rulesButton.addEventListener('click', function() {
    showRules();
});

// Création du conteneur pour les boutons de pause et de lecture
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'inline-block'; // Utilise inline-block pour aligner les boutons côte à côte
buttonContainer.style.zIndex = '1'; // Assurez-vous que le conteneur est au-dessus de la vidéo

// Création du bouton de pause
const pauseButton = document.createElement('button');
const pauseIcon = document.createElement('img');
pauseIcon.src = 'Sprites/volume off.png'; // Remplacez par le chemin de votre image de pause
pauseIcon.style.width = '40px'; // Définissez la largeur de l'icône
pauseIcon.style.height = '40px'; // Définissez la hauteur de l'icône
pauseButton.appendChild(pauseIcon);
pauseButton.style.padding = '5px'; // Ajoutez un peu d'espace autour de l'icône
pauseButton.style.border = 'none'; // Supprimez la bordure du bouton
pauseButton.style.background = 'none'; // Supprimez le fond du bouton
pauseButton.style.marginRight = '10px'; // Ajoutez un espace à droite du bouton de pause
pauseButton.addEventListener('click', function() {
    document.getElementById('backgroundMusic').pause();
});

// Création du bouton de lecture
const playButton = document.createElement('button');
const playIcon = document.createElement('img');
playIcon.src = 'Sprites/Volume.png';
playIcon.style.width = '40px'; // Définissez la largeur de l'icône
playIcon.style.height = '40px'; // Définissez la hauteur de l'icône
playButton.appendChild(playIcon);
playButton.style.padding = '5px'; // Ajoutez un peu d'espace autour de l'icône
playButton.style.border = 'none'; // Supprimez la bordure du bouton
playButton.style.background = 'none'; // Supprimez le fond du bouton
playButton.style.display = 'inline-block'; // Affiche le bouton en ligne
playButton.addEventListener('click', function() {
    document.getElementById('backgroundMusic').play();
});

// Ajout des boutons de pause et de lecture au conteneur
buttonContainer.appendChild(pauseButton);
buttonContainer.appendChild(playButton);

// Ajout des éléments à la page
container.appendChild(input);
container.appendChild(startButton);
container.appendChild(chooseCharacterButton); // Ajout du bouton "Choose Character" en dessous du bouton "Start"
container.appendChild(rulesButton);
container.appendChild(buttonContainer); // Ajout du conteneur des boutons de pause et lecture

body.appendChild(container);
