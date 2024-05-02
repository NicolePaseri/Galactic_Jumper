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
rulesButton.addEventListener('click', () => {
    // Affichage des règles du jeu avec des alertes
alert("Rules of Galactic Jumper/n/nDive into the space adventure as an astronaut on a quest to reach the moon and survive as long as possible by avoiding galactic dangers. Each life lost brings you closer to the end. In the beginning of the game, the player will have 3 lives./n/nLevel 1:/nDuring the first level, the astronaut can jump on clouds to do small bound while avoiding the bird that will cost a life. Progress to the next level by preserving your lives. Ready for the challenge of 'Level 2'? /n/nLevel 2:/nIn Level 2 of the game, the astronaut must skillfully avoid colliding with satellites, which will result in the loss of a life. If he collides with a rocket, the astronaut is propelled five stages ahead in the game. Encountering space debris disorients the astronaut, causing the left and right controls to be inverted for five seconds. When the astronaut successfully navigates through this loop with enough lives, he progresses to Level 3./n/nLevel 3:/nIf during the level 3 the astronaut collides with meteors or gets drawn into a black hole, he loses a life. Contact with aliens sends the astronaut back to the beginning of level 3. Successfully navigating through the obstacles allows the astronaut to reach the moon, representing the conclusion and victory in the game.");

    // Remplace le console.log par la logique pour afficher les règles de ton jeu
    console.log('There is the rules of the game...');
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
