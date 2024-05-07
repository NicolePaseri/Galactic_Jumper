function spawnPowerup(level) {
    // Définir les chances de chaque type de power-up en fonction du niveau
    var powerupChances = {
        "cloud": 20,
        "rocket": 50,
      
    };
    console.log("Create powerup");

    // Déterminer le type de power-up en fonction du niveau
    if (level === 1) {
        return generatePowerup("cloud", powerupChances["cloud"]);
    } else if (level === 2 || level === 3) {
        return generatePowerup("rocket", powerupChances["rocket"]);
    }
    return 0;

    
}

function generatePowerup(type, chance) {
    if (Math.round(Math.random() * chance) === 0) {
        return type;
    }
    return 0;
}
