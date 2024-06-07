function showCharacter() {
    var characterDiv = document.createElement("div");
    characterDiv.style.position = "absolute";
    characterDiv.style.top = "0";
    characterDiv.style.left = "0";
    characterDiv.style.width = "100vw";
    characterDiv.style.height = "100vh";
    characterDiv.style.zIndex = "9999";
    characterDiv.style.overflow = "hidden"; // Assurez-vous que le contenu supplémentaire est masqué
    characterDiv.style.display = "flex";
    characterDiv.style.flexDirection = "column";
    characterDiv.style.alignItems = "center";
    characterDiv.style.justifyContent = "center";

    // Ajout de la vidéo de fond
    var videoBackground = document.createElement('video');
    videoBackground.src = 'Sprites/Character.mp4'; // Remplacez par le chemin de votre vidéo
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
    videoBackground.style.zIndex = '-1'; // Met la vidéo en arrière-plan

    characterDiv.appendChild(videoBackground); // Ajoute la vidéo au conteneur

    var charactersContainer = document.createElement("div");
    charactersContainer.style.display = "flex";
    charactersContainer.style.justifyContent = "center";
    charactersContainer.style.flexDirection = "row";
    charactersContainer.style.flexWrap = "wrap";
    charactersContainer.style.padding = "20px";
    charactersContainer.style.zIndex = '1'; // Assurez-vous que le conteneur de personnages est au-dessus de la vidéo
    charactersContainer.style.position = 'relative'; // Position relative pour assurer la visibilité

    var characters = ["Sprites/Personnage/Alien.png", "Sprites/Personnage/Magicien.png", "Sprites/Personnage/MonsterOrange.png", "Sprites/Personnage/Astronaute.png", "Sprites/Personnage/Monster.png"];
    characters.forEach(function (character) {
        var characterImage = document.createElement("img");
        characterImage.src = character;
        characterImage.style.width = "100px";
        characterImage.style.height = "100px";
        characterImage.style.margin = "10px";
        characterImage.draggable = true;
        characterImage.addEventListener("dragstart", function (event) {
            event.dataTransfer.setData("text/plain", character);
        });
        charactersContainer.appendChild(characterImage);
    });

    var dropZoneDiv = document.createElement("div");
    dropZoneDiv.style.width = "200px";
    dropZoneDiv.style.height = "200px";
    dropZoneDiv.style.border = "2px dashed black";
    dropZoneDiv.style.margin = "20px";
    dropZoneDiv.style.position = "relative";
    dropZoneDiv.style.zIndex = '1'; // Assurez-vous que la zone de dépôt est au-dessus de la vidéo

    dropZoneDiv.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    dropZoneDiv.addEventListener("drop", function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du navigateur

        // Récupérer les types de fichiers déposés dans la zone
        var types = event.dataTransfer.types;

        // Récupérer le chemin de l'image déposée
        var character = event.dataTransfer.getData("text/plain");

        // Vérifier si le chemin de l'image fait partie de la liste autorisée
        if (characters.includes(character)) {
            dropZoneDiv.innerHTML = "";

            // Mise à jour de l'image du joueur avec le personnage drag and drop
            player.relativePath = character;

            var characterImage = document.createElement("img");
            characterImage.src = character;
            characterImage.style.width = "100%";
            characterImage.style.height = "100%";
            dropZoneDiv.appendChild(characterImage);
        } else {
            alert("You cannot upload a file.");
        }
    });

    var buttonsContainerDiv = document.createElement("div"); // Container pour les boutons
    buttonsContainerDiv.style.position = "absolute";
    buttonsContainerDiv.style.bottom = "20px"; // Position en bas de la page
    buttonsContainerDiv.style.left = "50%";
    buttonsContainerDiv.style.transform = "translateX(-50%)";
    buttonsContainerDiv.style.display = "flex";
    buttonsContainerDiv.style.zIndex = '1'; // Assurez-vous que le conteneur des boutons est au-dessus de la vidéo

    // Styles communs pour les boutons
    const buttonStyle = {
        fontSize: "20px",
        backgroundColor: "#007BFF", // Couleur de fond bleu
        color: "white", // Texte en blanc
        border: "none", // Enlève les bordures
        padding: "10px 20px", // Espacement intérieur
        borderRadius: "5px", // Coins arrondis
        cursor: "pointer", // Changer le curseur en pointeur
        margin: "10px" // Espacement entre les boutons
    };

    var closeButton = document.createElement("button");
    closeButton.textContent = "✖";
    Object.assign(closeButton.style, buttonStyle);
    closeButton.addEventListener("click", function () {
        characterDiv.remove(); // Supprimer l'élément contenant l'image du personnage et les boutons
    });

    var saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    Object.assign(saveButton.style, buttonStyle);
    saveButton.addEventListener("click", function () {
        var characterInDropZone = dropZoneDiv.querySelector("img");
        if (characterInDropZone) {
            var characterPath = characterInDropZone.src;
            var url = new URL(characterPath);
            var relativePath = url.pathname; // Obtenez le chemin relatif à partir de l'URL
            if (relativePath.charAt(0) === '/') {
                relativePath = relativePath.substring(1); // Supprimer le premier caractère s'il est "/"
            }
        } else {
            alert("No character selected.");
        }
    });

    buttonsContainerDiv.appendChild(closeButton);
    buttonsContainerDiv.appendChild(saveButton);

    characterDiv.appendChild(charactersContainer);
    characterDiv.appendChild(dropZoneDiv);
    characterDiv.appendChild(buttonsContainerDiv);

    document.body.appendChild(characterDiv);
}
