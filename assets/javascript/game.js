// initialize variables
var wins = 0;
var losses = 0;
var answer = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal3 = 0;
var score = 0;

// gameStart resets the random number variables and updates wins/losses in the DOM
function gameStart() {
    // generate a random number that the player has to guess.
    answer = 19 + Math.ceil(101*Math.random());
    $("#answer").text(answer); 
    // generate four random numbers for each of the crystals.
    crystal1 = 1 + Math.ceil(11*Math.random())
    crystal2 = 1 + Math.ceil(11*Math.random())
    crystal3 = 1 + Math.ceil(11*Math.random())
    crystal4 = 1 + Math.ceil(11*Math.random())
    console.log(crystal1, crystal2, crystal3, crystal4)
    // reset player score.
    score = 0;
    $("#score").text(score);
    $("#wins").text(wins);
    $("#losses").text(losses);
}

// checkScore checks the win/loss conditions after each guess and starts new rounds.
function checkScore() {
    // If player score = answer, wins++; gameStart()
    if (score === answer) {
        wins++;
        gameStart();
    }
    // If player score > answer, losses++; gameStart()
    else if (score > answer) {
        losses++;
        gameStart();
    }
    // If player score < answer, keep playing
}

gameStart (); // start the first instance of the game.

// click events assigned to each image id that will increase number value by a certain amount
// after each click, call the checkScore function to determine game results.

// Crystal Type 1 - Ruby
$("#crystal1").click(function() {
    score = score + crystal1;
    $("#score").html(score);
    checkScore();
})
// Crystal Type 2 - Saphire
$("#crystal2").click(function() {
    score += crystal2;
    $("#score").text(score);
    checkScore();
})
// Crystal Type 3 - Emerald
$("#crystal3").click(function() {
    score += crystal3;
    $("#score").text(score);
    checkScore();
})
// Crystal Type 4 - Garnet
$("#crystal4").click(function() {
    score += crystal4;
    $("#score").text(score);
    checkScore();
})