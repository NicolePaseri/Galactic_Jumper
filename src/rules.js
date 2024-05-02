function showRules() {
    var rulesDiv = document.createElement("rules");
    rulesDiv.id = "rules-div";
    rulesDiv.style.backgroundImage = 'url("Sprites/backgroundRules.png")'; // Changer le chemin d'accès à votre image de règles
    rulesDiv.style.width = "1920px";
    rulesDiv.style.height = "1080px";
    rulesDiv.style.backgroundSize = "cover";
    rulesDiv.style.position = "absolute"; // Position absolue pour superposer
    rulesDiv.style.top = "0"; // Positionner au-dessus de la page d'accueil
    rulesDiv.style.left = "0";
    rulesDiv.style.zIndex = "9999"; // Assurer que les règles apparaissent au-dessus de la page d'accueil

    // Ajouter le contenu des règles
    var rulesContent = document.createElement("p");
    rulesContent.textContent = "Rules of Galactic Jumper Dive into the space adventure as an astronaut on a quest to reach the moon and survive as long as possible by avoiding galactic dangers. Each life lost brings you closer to the end. In the beginning of the game, the player will have 3 lives./n/nLevel 1:/nDuring the first level, the astronaut can jump on clouds to do small bound while avoiding the bird that will cost a life. Progress to the next level by preserving your lives. Ready for the challenge of 'Level 2'? /n/nLevel 2:/nIn Level 2 of the game, the astronaut must skillfully avoid colliding with satellites, which will result in the loss of a life. If he collides with a rocket, the astronaut is propelled five stages ahead in the game. Encountering space debris disorients the astronaut, causing the left and right controls to be inverted for five seconds. When the astronaut successfully navigates through this loop with enough lives, he progresses to Level 3./n/nLevel 3:/nIf during the level 3 the astronaut collides with meteors or gets drawn into a black hole, he loses a life. Contact with aliens sends the astronaut back to the beginning of level 3. Successfully navigating through the obstacles allows the astronaut to reach the moon, representing the conclusion and victory in the game."; // Remplacez par vos propres règles
    rulesContent.style.fontSize = "24px";
    rulesContent.style.color = "white";
    rulesContent.style.position = "absolute";
    rulesContent.style.top = "50%";
    rulesContent.style.left = "50%";
    rulesContent.style.transform = "translate(-50%, -50%)";
    rulesContent.style.textAlign = "center";
    rulesDiv.appendChild(rulesContent);

     // Créer un bouton pour revenir à la page d'accueil
     var homeButton = document.createElement("button");
     homeButton.textContent = "Home";
     homeButton.style.fontSize = "20px";
     homeButton.style.position = "absolute";
     homeButton.style.top = "70%";
     homeButton.style.left = "50%";
     homeButton.style.transform = "translateX(-50%)";
     homeButton.addEventListener("click", function() {
         location.reload();
     });
     rulesDiv.appendChild(homeButton);

    // Ajouter la div des règles à la page
    document.body.appendChild(rulesDiv);
}