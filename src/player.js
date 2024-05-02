var player = new function() {
    this.x = 300;
    this.y = 550;
    this.img = new Image();
    this.img.src = "Sprites/Jumpleft.png";
    this.width = 80;
    this.height = 80;
    this.xSpeed = 6.7;
    this.ySpeed = 0;
    this.rocketDurability = 0;
    this.direction = "left";
    this.isBlinking = false;
    this.isDesoriented = false;

    this.update = function() {
        if (!dead) {
            this.ySpeed += gravity;
            if (this.y <= screen.height / 2 - 200 && this.ySpeed <= 0) {
                for (var i = 0; i < blocks.length; i++) {
                    blocks[i].y -= this.ySpeed;
                }
            } else {
                this.y += this.ySpeed;
            }
            yDistanceTravelled -= this.ySpeed;
    
            // Collision avec les trous noirs
            for (var i = 0; i < blocks.length; i++) {
                if (blocks[i].blackHole !== 0) {
                    if (this.x + this.width >= blocks[i].x && this.x <= blocks[i].x + blocks[i].width &&
                        this.y + this.height >= blocks[i].y && this.y <= blocks[i].y + blocks[i].height) {
                        gameOver(); // Fin du jeu si le joueur touche un trou noir
                        return; // Arrêt de la mise à jour du joueur
                    }
                }
            }
    
        } else {
            gameOver(); // Affiche l'écran de fin de jeu si le joueur est mort
        }

        // ← key pressed
        if (holdingLeftKey) {
            this.direction = "left";
            this.img.src = "Sprites/jumpLeft.png";
            player.moveLeft();
        }
        // → key pressed 
        if (holdingRightKey) {
            this.direction = "right";
            this.img.src = "Sprites/jumpRight.png";
            player.moveRight();
        }

        //Check for jump
        for (var i = 0; i < blocks.length; i++) {
            if (this.ySpeed >= 0) {
                if (this.x >= blocks[i].x - this.width + 15 && this.x <= blocks[i].x + blocks[i].width - 15 &&
                    this.y >= blocks[i].y - this.height && this.y <= blocks[i].y + blocks[i].height - this.height) {
                    if (blocks[i].type === "break") {
                        blocks[i] = 0;
                    } else if (blocks[i].obstacle !== 0) {
                        this.jump(blocks[i].powerup, blocks[i].type);
                        blocks[i] = 0;
                    } else {
                        this.jump(blocks[i].powerup, blocks[i].type);
                    }
                }
            } 
            if (this.y > blocks[i].y) {
                //Check for hit obstacle
                if (blocks[i].obstacle !== 0 && blocks[i].obstacle !== undefined) {
                    if (this.x >= blocks[i].x - this.width + 15 && this.x <= blocks[i].x + blocks[i].width - 15 &&
                        this.y >= blocks[i].y - blocks[i].height && this.y <= blocks[i].y + blocks[i].height) {
                        loseLife();
                    }
                }
                if (blocks[i].particule !== 0 && blocks[i].particule !== undefined) {
                    if (this.x >= blocks[i].x - this.width + 15 && this.x <= blocks[i].x + blocks[i].width - 15 &&
                        this.y >= blocks[i].y - blocks[i].height && this.y <= blocks[i].y + blocks[i].height) {
                        isDesoriented = true;
                        console.log("You are desoriented")
                        setTimeout(function(){isDesoriented = false;console.log("The desorientation finished");}, 5000) 
                    }
                }
                if (blocks[i].alien !== 0 && blocks[i].alien !== undefined) {
                    if (this.x >= blocks[i].x - this.width + 15 && this.x <= blocks[i].x + blocks[i].width - 15 &&
                        this.y >= blocks[i].y - blocks[i].height && this.y <= blocks[i].y + blocks[i].height) {
                        
                        // il faudrait afficher ici l'écran du kidnapping

                        setTimeout(function() {
                            // enlever ici l'écran du kidnapping
                            // ajouter quelque part le drag&drop du player
                            }, 3000);
                        score = 3000;
                    }
                }
            }
        }


        for (var i = blocks.length-1; i > 0; i--) {
            if (blocks[i].y > screenHeight) {
                lowestBlock = i+1;
                break;
            }
        }

        if (this.y >= blocks[lowestBlock].y) {
            dead = true;
        }

        if (lowestBlock >= 45) {
            if (difficulty < 6) {
                difficulty += 1;
            }
            blockSpawner();
        }
    }
    
    this.jump = function(powerup, type) {
        this.ySpeed = -13.2;

        if (powerup === "rocket") {
            this.rocketDurability = 6;
        }
        
        if (type === 0) {
            if (powerup === "cloud") {
                this.ySpeed = -20;
            } 
        }

        if (this.rocketDurability !== 0) {
            this.ySpeed = -20;
            this.rocketDurability -= 1;
        }  
    }

 this.moveLeft = function() {
    if (isDesoriented) { // Si le joueur est désorienté
        this.x += this.xSpeed; // Soustrayez le xSpeed au lieu de l'ajouter
    } else {
        this.x -= this.xSpeed;
    }
    if (this.x <= -this.width) {
        this.x = screenWidth;
    }
}

this.moveRight = function() {
    if (isDesoriented) { // Si le joueur est désorienté
        this.x -= this.xSpeed; // Ajoutez le xSpeed au lieu de le soustraire
    } else {
        this.x += this.xSpeed;
    }
    if (this.x >= screenWidth) {
        this.x = -this.width;
    }
}


    this.draw = function() {

        if (isBlinking && Math.floor(Date.now() / 200) % 2 === 0) {
            return;
        }

        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

        if (this.rocketDurability !== 0) {
            if (this.direction === "right") {
                var rocketImg = new Image();
                rocketImg.src = "Sprites/rocket.png";
                rocketImg.onload = function() {
                    ctx.drawImage(rocketImg, this.x - 40, this.y, 100, 100);
                }.bind(this);
            } else {
                var rocketImg = new Image();
                rocketImg.src = "Sprites/rocket.png";
                rocketImg.onload = function() {
                    ctx.drawImage(rocketImg, this.x + 20, this.y, 100, 100);
                }.bind(this);
            }
        }
    }
}
