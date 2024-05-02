// Création des éléments de la page
const body = document.body;
const container = document.createElement('div');
container.id = 'homepage' ;
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

const rulesButton = document.createElement('button');
rulesButton.textContent = 'Rules of Galactic Jumper';
rulesButton.style.marginBottom = '10px';
rulesButton.addEventListener('click', function() {
    console.log("Bouton 'Rules of Galactic Jumper' cliqué");
    showRules();
});

const startButton = document.createElement('button');
startButton.textContent = 'Starting to play';
startButton.addEventListener('click', () => {
    const username = input.value;
    if (username.trim() !== '') {
        // Masquer la page d'accueil lorsque le jeu commence
        container.style.display = 'none';
        
        // Tu peux ajouter ici la logique pour commencer à jouer avec le username entré
        console.log(`Starting to play with ${username}`);
        resetGame();
    } else {
        alert('You must enter a username to play');
    }
});

// Ajout des éléments à la page
container.appendChild(input);
container.appendChild(rulesButton);
container.appendChild(startButton);
body.appendChild(container);
