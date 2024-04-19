var cloudImage = new Image();
cloudImage.src = 'Sprites/cloud.png';

var rocketImage = new Image();
rocketImage.src = 'Sprites/rocket.png';


function block() {
    this.x;
    this.y;
    this.width = 100;
    this.height = 15;
    this.powerup;
    this.type;
    this.obstacle;
    this.direction = "right";
    this.moveTime = 10;

    // Plateformes qui se cassent et plateformes qui bougent
    this.draw = function() {
        if (this.type === "break") {
            ctx.fillStyle = "#876537";
        } else if (this.type === "sideways") {
            ctx.fillStyle = "#14a7c8";
        } else {
            ctx.fillStyle = "#FFFFFF"; // Plateforme blanche retirée d'ici
        }

        if (this.obstacle !== 0) {
            obstacleFunctions[this.obstacle].draw(this.x, this.y);
        } else if (this.particule !== 0) {
                particuleFunctions[this.particule].draw(this.x, this.y);
            } else if (this.powerup === "cloud") {
                ctx.drawImage(cloudImage, this.x + 25, this.y - 20, 90, 90); // Ajustez la taille ici
                } else if (this.powerup === "rocket") {
                    ctx.drawImage(rocketImage, this.x + 20, this.y - 100, 100, 100); // Ajustez la taille ici
                    ctx.fillRect(this.x, this.y, this.width, this.height);
                        } else {
                            ctx.fillRect(this.x, this.y, this.width, this.height);
                        }
    }
    this.update = function() {
        if (this.type === "sideways") {
            if (this.x >= screenWidth - this.width) {
                this.direction = "left";
            } else if (this.x <= 0) {
                this.direction = "right";
            }

            if (this.direction === "right") {
                this.x += 2.5;
            } else {
                this.x -= 2.5;
            }
        }

        if (this.obstacle === "obstacle") {
            if (this.direction === "right") {
                this.x += 1;
                this.moveTime -= 1;

                if (this.moveTime === 0) {
                    this.direction = "left";
                    this.moveTime = 25;
                }
            } else {
                this.x -= 1;
                this.moveTime -= 1;

                if (this.moveTime === 0) {
                    this.direction = "right";
                    this.moveTime = 25;
                }
            }
        }
    }
}
