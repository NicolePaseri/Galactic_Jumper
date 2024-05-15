function showCharacter() {
    var characterDiv = document.createElement("div");
    characterDiv.id = "character-div";
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

    var characters = ["Sprites/Personnage/Guerrier.png", "Sprites/Personnage/Humain.png", "Sprites/Personnage/Magicien.png", "Sprites/Personnage/PersonnageFusé.png", "Sprites/Personnage/PetitMonstre.png", "Sprites/Personnage/PetitMonstreViolet.png"];
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

    var dropZone = document.createElement("div");
    dropZone.style.width = "200px";
    dropZone.style.height = "200px";
    dropZone.style.border = "2px dashed black";
    dropZone.style.margin = "20px";
    dropZone.style.position = "absolute";
    dropZone.style.top = "50%";
    dropZone.style.right = "50%";
    dropZone.style.transform = "translate(50%, -50%)"; // Centrer la boîte horizontalement et verticalement

    dropZone.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    dropZone.addEventListener("drop", function (event) {
        event.preventDefault();
        dropZone.innerHTML = "";
        var character = event.dataTransfer.getData("text/plain");

        // Mise à jour de l'image du joueur avec le personnage drag and drop
        player.img.src = character;

        var characterImage = document.createElement("img");
        characterImage.src = character;
        characterImage.style.width = "100%";
        characterImage.style.height = "100%";
        dropZone.appendChild(characterImage);
    });

    var homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.style.fontSize = "20px";
    homeButton.style.position = "absolute";
    homeButton.style.bottom = "20px";
    homeButton.style.left = "50%";
    homeButton.style.transform = "translateX(-50%)";
    homeButton.addEventListener("click", function () {
        location.reload();
    });

    dropZone.appendChild(homeButton);
    characterDiv.appendChild(charactersContainer);
    characterDiv.appendChild(dropZone);
    document.body.appendChild(characterDiv);
}
