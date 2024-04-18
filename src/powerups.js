function spawnPowerup() {
    var powerupChances = {
        "cloud": 20,
        "rocket": 80,
      
    };

    if (Math.round(Math.random() * powerupChances["cloud"]) === 0) {
        return "cloud";
    } else if (Math.round(Math.random() * powerupChances["rocket"]) === 0) {
        return "rocket";
    }
    return 0;
}