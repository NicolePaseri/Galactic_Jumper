function spawnPowerup() {
    var powerupChances = {
        "spring": 20,
        "rocket": 80,
      
    };

    if (Math.round(Math.random() * powerupChances["spring"]) === 0) {
        return "spring";
    } else if (Math.round(Math.random() * powerupChances["rocket"]) === 0) {
        return "rocket";
    }
    return 0;
}