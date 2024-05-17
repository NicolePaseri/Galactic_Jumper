
function showCharacter() {
    var characterDiv = document.createElement("div");
    characterDiv.style.backgroundImage = 'url("Sprites/PersonnageBackground.png")';
    characterDiv.style.width = "1700px";
    characterDiv.style.height = "900px";
    characterDiv.style.backgroundSize = "cover";
    characterDiv.style.position = "absolute";
    characterDiv.style.top = "0";
    characterDiv.style.left = "0";
    characterDiv.style.zIndex = "9999";

    var charactersContainer = document.createElement("div");
    charactersContainer.style.flex = "1";
    charactersContainer.style.display = "flex";
    charactersContainer.style.flexDirection = "column";
    charactersContainer.style.alignItems = "flex-start";
    charactersContainer.style.padding = "20px";

    var characters = ["Sprites/Personnage/Alien.png","Sprites/Personnage/Magicien.png", "Sprites/Personnage/MonsterOrange.png","Sprites/Personnage/Astronaute.png", "Sprites/Personnage/Monster.png"  ];
    characters.forEach(function (character) {
        var characterImage = document.createElement("img");
        characterImage.src = character;
        characterImage.style.width = "100px";
        characterImage.style.height = "100px";
        characterImage.style.marginBottom = "10px";
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
    dropZoneDiv.style.position = "absolute";
    dropZoneDiv.style.top = "50%";
    dropZoneDiv.style.right = "20px"; // Déplacer le carré vers la droite de 20 pixels
    dropZoneDiv.style.transform = "translateY(-50%)"; // Centrer le carré verticalement

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
            alert("Vous ne pouvez pas déposer cette image.");
        }
    });
    

    var buttonsContainerDiv = document.createElement("div"); // Container pour les boutons
    buttonsContainerDiv.style.position = "absolute";
    buttonsContainerDiv.style.top = "20px"; // Position en haut de la page
    buttonsContainerDiv.style.left = "50%";
    buttonsContainerDiv.style.transform = "translateX(-50%)";
    buttonsContainerDiv.style.display = "flex";

    var closeButton = document.createElement("button");
closeButton.textContent = "✖";
closeButton.style.fontSize = "20px";
closeButton.style.marginRight = "10px"; // Espacement entre les boutons
closeButton.addEventListener("click", function () {
    characterDiv.remove(); // Supprimer l'élément contenant l'image du personnage et les boutons
});


    var saveButton = document.createElement("button");
saveButton.textContent = "Save";
saveButton.style.fontSize = "20px";
saveButton.style.marginLeft = "10px"; // Espacement entre les boutons
saveButton.addEventListener("click", function () {
    var characterInDropZone = dropZoneDiv.querySelector("img");
    if (characterInDropZone) {
        var characterPath = characterInDropZone.src;
        var url = new URL(characterPath);
        var relativePath = url.pathname; // Obtenez le chemin relatif à partir de l'URL
        if (relativePath.charAt(0) === '/') {
            relativePath = relativePath.substring(1); // Supprimer le premier caractère s'il est "/"
        }
        alert("Personnage enregistré : \"" + relativePath + "\"");
        // Ici, vous pouvez effectuer toute action pour enregistrer le personnage
    } else {
        alert("Aucun personnage sélectionné.");
    }
});

    buttonsContainerDiv.appendChild(closeButton);
    buttonsContainerDiv.appendChild(saveButton);

    characterDiv.appendChild(charactersContainer);
    characterDiv.appendChild(dropZoneDiv);
    characterDiv.appendChild(buttonsContainerDiv); // Ajout du conteneur de boutons au conteneur principal

    document.body.appendChild(characterDiv);
}


