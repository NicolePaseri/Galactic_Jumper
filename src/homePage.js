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
    showRules();
});

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
});
// Ajout des éléments à la page
container.appendChild(input);
container.appendChild(rulesButton);
container.appendChild(startButton);
body.appendChild(container);
