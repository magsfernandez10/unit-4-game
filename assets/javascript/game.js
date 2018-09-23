var computerChoices = ["1", "2", "3", "4", "4", "5", "6", "7", "8", "9",];
var wins = 0;
var losses = 0;
var numGuesses = 10;
var guessedChoices = [];
var userGuess;

var reset = function () {
    guessedChoices = [];
    numGuesses = 10;
}

document.onkeydown = function (event) {


    userGuess = event.key;

    var randomcomputerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === randomcomputerGuess) {
        wins++;
        numGuesses--;
        guessedChoices.push(userGuess);
    }
    else {
        losses++;
        numGuesses--;
        guessedChoices.push(userGuess);
    }

    if (numGuesses === 0) {
        reset();
    }

    

    var html =
        "<h1> The Crystal Game </h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + numGuesses + "</p>" +
        "<p>Your Guesses so far: " + guessedChoices.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = html;



};
