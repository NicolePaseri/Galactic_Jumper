// Lives

function drawLives() {
    for (let i = 0; i < lives; i++) {
        let heartImg = new Image();
        heartImg.src = "Sprites/heart.png";
        ctx.drawImage(heartImg, screenWidth - (i + 1) * 30, 5, 25, 25);
    }
}

function loseLife() {
    if(canLoseLife) {
        lives--; 
        canLoseLife = false;
        isBlinking = true;
        console.log("You lose a life");
        if (lives <= 0) {
            gameOver();
        }
        setTimeout(function(){canLoseLife = true; isBlinking = false;}, 2000)    
    }
}

function gameOver() {
    console.log("GameOver !");
    
    // Supprimer le canevas du jeu
    c.parentNode.removeChild(c);

    // Créer une nouvelle div pour afficher le message de fin de partie et les boutons
    var gameOverDiv = document.createElement("div");
    gameOverDiv.id = "game-over-div";
    gameOverDiv.style.backgroundImage = 'url("Sprites/gameover.png")';
    gameOverDiv.style.width = screenWidth + "px";
    gameOverDiv.style.height = screenHeight + "px";
    gameOverDiv.style.position = "absolute";
    gameOverDiv.style.top = "0";
    gameOverDiv.style.left = "0";

    // Créer un paragraphe pour le message de fin de partie
    var gameOverMessage = document.createElement("p");
    gameOverMessage.textContent = "The astronaut failed the mission!";
    gameOverMessage.style.fontSize = "25px";
    gameOverMessage.style.color = "white";
    gameOverMessage.style.textAlign = "center";
    gameOverMessage.style.position = "absolute";
    gameOverMessage.style.top = "50%";
    gameOverMessage.style.left = "50%";
    gameOverMessage.style.transform = "translate(-50%, -50%)";
    gameOverDiv.appendChild(gameOverMessage);

    // Créer un bouton pour redémarrer le jeu
    var restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.style.fontSize = "20px";
    restartButton.style.position = "absolute";
    restartButton.style.top = "60%";
    restartButton.style.left = "50%";
    restartButton.style.transform = "translateX(-50%)";
    restartButton.addEventListener("click", function() {
        // Recharger la page pour redémarrer le jeu
        location.reload();
    });
    gameOverDiv.appendChild(restartButton);

    // Créer un bouton pour accéder au "Wall of Fame"
    var wallOfFameButton = document.createElement("button");
    wallOfFameButton.textContent = "Wall of Fame";
    wallOfFameButton.style.fontSize = "20px";
    wallOfFameButton.style.position = "absolute";
    wallOfFameButton.style.top = "70%";
    wallOfFameButton.style.left = "50%";
    wallOfFameButton.style.transform = "translateX(-50%)";
    wallOfFameButton.addEventListener("click", function() {
        // Rediriger vers la page du "Wall of Fame"
        window.location.href = "src/wallOfFame.html"; // Remplacez "wall_of_fame.html" par l'URL de votre page
    });
    gameOverDiv.appendChild(wallOfFameButton);

    // Créer un bouton pour revenir à la page d'accueil
    var homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.style.fontSize = "20px";
    homeButton.style.position = "absolute";
    homeButton.style.top = "80%";
    homeButton.style.left = "50%";
    homeButton.style.transform = "translateX(-50%)";
    homeButton.addEventListener("click", function() {
        // Rediriger vers la page d'accueil
        location.reload(); // Remplacez "home.html" par l'URL de votre page d'accueil
    });
    gameOverDiv.appendChild(homeButton);

    // Ajouter la div de fin de partie à la page
    document.body.appendChild(gameOverDiv);
}



// Fonction pour afficher le message de victoire
function win() {
    console.log("You win !");
    ctx.clearRect(0, 0, screenWidth, screenHeight);
    ctx.drawImage(backgroundImageWin, 0, 0, screenWidth, screenHeight);

    ctx.font = "25px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("The astronaut archived the mission!", screenWidth / 2, screenHeight * 0.75); 
    ctx.font = "36px Arial";
    ctx.fillText("Press espace to restart", screenWidth / 2, (screenHeight * 0.75) + 50);
dead = true;
}