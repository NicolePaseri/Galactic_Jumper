function spawnBlock() {
    var blockChances = {
        "break": 5,
        "sideways": Math.round(1 / (level-1))
    };

    if (Math.round(Math.random() * blockChances["break"]) === 0) {
        return "break";
    } else if (Math.round(Math.random() * blockChances["sideways"]) === 0) {
        return "sideways";
    }
    return 0;
}
