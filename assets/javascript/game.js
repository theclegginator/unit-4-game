// 1. Initialize the stats of all characters by making them an object. Attack button should be disabled at the beginning of the game.
var player = undefined;
var char1 = {
    HP: 100,
    baseAttack: 10,
    currentAttack: 10,
    counterAttack: 5
}
var char2 = {
    HP: 135,
    baseAttack: 8,
    currentAttack: 10,
    counterAttack: 5
}
var char3 = {
    HP: 180,
    baseAttack: 6,
    currentAttack: 10,
    counterAttack: 5
}
var char4 = {
    HP: 142,
    baseAttack: 9,
    currentAttack: 10,
    counterAttack: 5
}

// Player selects a character by clicking on one of the four images positioned at the top. Use jQuery on click events. These characters will be in a container at the top of the screen.
if (player === undefined) {
    $("#char1").on("click", function() {
        player = char1;
        $("#char1").appendTo("#battleArena");
        $("#char2").appendTo("#enemySelect");
        $("#char3").appendTo("#enemySelect");
        $("#char4").appendTo("#enemySelect");
    })
    $("#char2").on("click", function() {
        player = char2;
        $("#char1").appendTo("#enemySelect");
        $("#char3").appendTo("#enemySelect");
        $("#char4").appendTo("#enemySelect");
    })
    $("#char3").on("click", function() {
        player = char3;
        $("#char1").appendTo("#enemySelect");
        $("#char2").appendTo("#enemySelect");
        $("#char4").appendTo("#enemySelect");
    })
    $("#char4").on("click", function() {
        player = char4;
        $("#char1").appendTo("#enemySelect");
        $("#char2").appendTo("#enemySelect");
        $("#char3").appendTo("#enemySelect");
    })
}



// Move the player character to the battle arena part of the screen

// The player then selects an opponent by clicking one of the available enemy characters. 
// var opponent = char2, etc

// After selecting a character to fight, they are moved to the battle arena part of the screen

// Once an opponent is selected, the "Attack" button will become active instead of disabled.

// ===== BATTLE SECTION =====

    // Decrease Opponent's HP by player's currentAttack power

        // Special case to ensure HP = 0 if the HP value goes negative.

    // Decrease Player's HP by opponent's counterAttack power

        // Special case to ensure HP = 0 if the HP value goes negative.

    // Each time player attacks, their attack power increases by their base attack power.
    //player.currentAttack += player.baseAttack;