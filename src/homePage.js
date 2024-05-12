// Création des éléments de la page
const body = document.body;
const container = document.createElement('div');
container.id = 'homepage';
container.style.backgroundImage = "url('Sprites/fondecraninscription.png')";
container.style.backgroundSize = '1920px 1080px';
container.style.width = '1920px';
container.style.height = '1080px';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.position = 'relative';

const input = document.createElement('input');
input.placeholder = 'Enter your username';
input.style.marginBottom = '10px';

const startButton = document.createElement('button');
startButton.textContent = 'Starting to play';
startButton.addEventListener('click', () => {
    const username = input.value;
    if (username.trim() !== '') {
        // Enregistrer le nom d'utilisateur dans le stockage local
        localStorage.setItem("username", username);

        // Masquer la page d'accueil lorsque le jeu commence
        container.style.display = 'none';

        console.log(`Starting to play with ${username}`);
        resetGame();
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

            getCity(latitude, longitude);
        });
    } else {
        console.log("La géolocalisation n'est pas prise en charge par ce navigateur.");
    }
});


const rulesButton = document.createElement('button');
rulesButton.textContent = 'Rules of Galactic Jumper';
rulesButton.style.marginBottom = '10px';
rulesButton.addEventListener('click', function() {
    showRules();
});



// Création du bouton de pause
const pauseButton = document.createElement('button');
const pauseIcon = document.createElement('img');
pauseIcon.src = 'Sprites/pasvolume.jpg'; // Remplacez 'chemin/vers/votre/image_pause.png' par le chemin de votre image de pause
pauseIcon.style.width = '30px'; // Définissez la largeur de l'icône
pauseIcon.style.height = '30px'; // Définissez la hauteur de l'icône
pauseButton.appendChild(pauseIcon);
pauseButton.style.padding = '5px'; // Ajoutez un peu d'espace autour de l'icône
pauseButton.style.border = 'none'; // Supprimez la bordure du bouton
pauseButton.style.background = 'none'; // Supprimez le fond du bouton
pauseButton.addEventListener('click', function() {
    document.getElementById('backgroundMusic').pause();
});


const playButton = document.createElement('button');
const playIcon = document.createElement('img');
playIcon.src = 'Sprites/Volume.png'; 
playIcon.style.width = '20px'; // Définissez la largeur de l'icône
playIcon.style.height = '20px'; // Définissez la hauteur de l'icône
playButton.appendChild(playIcon);
playButton.addEventListener('click', function() {
    document.getElementById('backgroundMusic').play();
});


const volumeButton = document.createElement('button');
volumeButton.textContent = 'Set Volume';
volumeButton.addEventListener('click', function() {
    const volume = prompt('Enter the volume (between 0 and 1):');
    if (volume !== null) {
        const parsedVolume = parseFloat(volume);
        if (!isNaN(parsedVolume) && parsedVolume >= 0 && parsedVolume <= 1) {
            document.getElementById('backgroundMusic').volume = parsedVolume;
        } else {
            alert('Please enter a valid volume value between 0 and 1');
        }
    }
});

// Ajout des éléments à la page
container.appendChild(input);
container.appendChild(rulesButton);
container.appendChild(startButton);
container.appendChild(pauseButton);
container.appendChild(playButton);
container.appendChild(volumeButton);
body.appendChild(container);



// Fonction pour récupérer la ville à partir de la latitude et la longitude
function getCity(latitude, longitude) {
    const apiKey = 'c12ca4a8049e4152a425eb8395c70062'; // Remplacez 'VOTRE_CLE_API' par votre clé API Apibundle.io
    const url = `https://api.apibundle.io/geocoding/reverse?lat=${latitude}&lng=${longitude}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            // Récupérer la ville à partir des données
            const city = data.city;
            console.log('User is in:', city);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}