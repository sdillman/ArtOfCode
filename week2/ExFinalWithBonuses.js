// ...
// Bonus: Add a way for the GameController to keep track of the high score of 
// all players in the game.

// PERSONAL TBD: Refactor to use array.map(function). And find the way
// to avoid DRY on the check/replace high score methods


function GameController(numPlayers) {
    this.game = []; // to hold all the players
    this.gameHighScore = 0; // global high score

    for ( var playerNbr = 1; playerNbr <= numPlayers; playerNbr++) {
        this.game.push( new Player('player' + playerNbr) );
    }  // build array players called for in numPlayers
}

GameController.prototype.takeTurn = function takeTurn() {
    var guessMe = Math.floor(Math.random() * 10) + 1; // game's number to match
    // random number from 1 - 10
    var playerGuess; // the player's guess
    
    for (var n = 0; n <=20; n++) {                  // RUNNING 21 TURNS for testing
    
    for( this.i = 0; this.i < this.game.length; this.i++) {
        playerGuess = this.game[this.i].takeGuess();

        if (playerGuess === guessMe) {   // if guesses correctly...
            this.game[this.i].updateScores();
            this.game[this.i].bonusLifeCredit();
            if(this.game[this.i].highScore > this.gameHighScore) { // check for new
                this.gameHighScore = this.game[this.i].highScore; // game high score
            }
            if (this.game[this.i].extraLifeCredits === 3) {  // and if enough credits earned
                this.game[this.i].addLives();               // add a life
                this.game[this.i].resetExtraLifeCredits();  // then reset those credits
                                                    // reset to 0 when spent on a new life
            }
        } else {                                    // guesed wrong...
            this.game[this.i].resetExtraLifeCredits();
            this.game[this.i].subtractLives();
            if (this.game[this.i].lives === 0) {
                this.game[this.i].gameOver();
            }
        }
    console.log('Round ' + n, this.game, '  this game high score: ', this.gameHighScore);
    }                                           // END RUNNING 21 TURNS
    }
};



function Player(userName) {
    this.userName = userName;
    this.score = 0;
    this.highScore = 0;
    this.lives = 3;
    this.extraLifeCredits = 0;
}

Player.prototype.takeGuess = function takeGuess() {
    return Math.floor(Math.random() * 10) + 1; 
        // random number from 1 - 10
};

Player.prototype.editUserName = function editUserName(newUserName) {
    this.userName = newUserName;
};

Player.prototype.updateScores = function updateScores() {
    this.score += 10;
    if (this.score > this.highScore) {
        this.highScore = this.score;
    }
};

Player.prototype.gameOver = function gameOver() {
    this.score = 0; // resetting score
    this.lives = 3; // resetting lives
    console.log('Game over!');
};

Player.prototype.addLives = function addLives() {
    this.lives++;
};

Player.prototype.subtractLives = function subtractLives() {
        this.lives--;
};

Player.prototype.bonusLifeCredit = function bonusLifeCredit() {
    this.extraLifeCredits += 1;
};

Player.prototype.resetExtraLifeCredits = function resetExtraLifeCredits() {
    this.extraLifeCredits = 0;
};


// -------- baby testing stuffs below ----------
/*
var game1 = new GameController(2);
var game2 = new GameController(3);

game1.game[1] instanceof Player;
game1 instanceof GameController;

game1.game[1].editUserName('fred');

game1.takeTurn();
*/