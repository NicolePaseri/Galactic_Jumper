function showRules() {
    var rulesDiv = document.createElement("div");
    rulesDiv.id = "rules-div";
    rulesDiv.style.width = "100vw";  // Utiliser 100% de la largeur du viewport
    rulesDiv.style.height = "100vh";  // Utiliser 100% de la hauteur du viewport
    rulesDiv.style.position = "absolute"; // Position absolue pour superposer
    rulesDiv.style.top = "0"; // Positionner au sommet de la page
    rulesDiv.style.left = "0"; // Aligner à gauche de la page
    rulesDiv.style.zIndex = "9999"; // Assurer que les règles apparaissent au-dessus des autres éléments

    // Ajouter la vidéo de fond
    const video = document.createElement("video");
    video.src = "Sprites/Rules.mp4"; // Remplacez par le chemin d'accès à votre vidéo
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.autoplay = true;
    video.loop = true; // Supprimez cette ligne si vous ne voulez pas que la vidéo boucle
    video.muted = true; // Supprimez cette ligne si vous voulez du son
    rulesDiv.appendChild(video);

    // Ajouter le contenu des règles

var rulesContent = document.createElement("p");
rulesContent.innerHTML = "<br>Dive into the space adventure as an astronaut on a quest to reach the moon and survive as long as possible by avoiding galactic dangers. Each life lost brings you closer to the end. In the beginning of the game, the player will have 5 lives.<br><br>Level 1:<br>During the first level, the astronaut can jump on clouds to do small bound while avoiding the bird that will cost a life. Progress to the next level by preserving your lives. Ready for the challenge of 'Level 2'? <br><br>Level 2:<br>In Level 2 of the game, the astronaut must skillfully avoid colliding with satellites, which will result in the loss of a life. If he collides with a rocket, the astronaut is propelled five stages ahead in the game. Encountering space debris disorients the astronaut, causing the left and right controls to be inverted for five seconds. When the astronaut successfully navigates through this loop with enough lives, he progresses to Level 3.<br><br>Level 3:<br>If during the level 3 the astronaut collides with meteors or gets drawn into a black hole, he loses a life. Contact with aliens sends the astronaut back to the beginning of level 3. Successfully navigating through the obstacles allows the astronaut to reach the moon, representing the conclusion and victory in the game."; // Remplacez par vos propres règles
rulesContent.style.fontSize = "16px";
rulesContent.style.color = "white";
rulesContent.style.position = "absolute";
rulesContent.style.top = "50%";
rulesContent.style.left = "50%";
rulesContent.style.transform = "translate(-50%, -50%)";
rulesContent.style.textAlign = "center";
rulesDiv.appendChild(rulesContent);


    // Styles communs pour les boutons
    const buttonStyle = {
        fontSize: "20px",
        backgroundColor: "#007BFF", // Couleur de fond bleu
        color: "white", // Texte en blanc
        border: "none", // Enlève les bordures
        padding: "10px 20px", // Espacement intérieur
        borderRadius: "5px", // Coins arrondis
        cursor: "pointer", // Changer le curseur en pointeur
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)"
    };

    var closeButton = document.createElement("button");
    closeButton.textContent = "✖";
    Object.assign(closeButton.style, buttonStyle);
    closeButton.style.bottom = "10px"; // Positionné à 10px du bas
    closeButton.addEventListener("click", function () {
        rulesDiv.remove(); // Supprimer l'élément contenant l'image du personnage et les boutons
    });
    rulesDiv.appendChild(closeButton);

    // Ajouter la div des règles à la page
    document.body.appendChild(rulesDiv);
}
