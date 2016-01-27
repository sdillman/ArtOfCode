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
    } // build array of Player objects, creating user names of "player1", "player2" etc
}

GameController.prototype.takeTurn = function takeTurn() {
    var guessMe = Math.floor(Math.random() * 10) + 1; // game's number to match
                                                    // random number from 1 - 10
    var playerGuess; // the player's guess
    var currentPlayer; // to simplify this.game[i], which IS the current player
    
    for (var n = 0; n <=20; n++) {                  // RUNNING 21 TURNS for testing
    console.log('\n\n' + 'ROUND ' + n + '  Match ' + guessMe + ' to win.' + '\n')
    
    for( i = 0; i < this.game.length; i++) {
        currentPlayer = this.game[i];
        playerGuess = currentPlayer.takeGuess();

        if (playerGuess === guessMe) {   // if guesses correctly...
            currentPlayer.updateScores();
            currentPlayer.bonusLifeCredit();
            console.log('Bonus credit ' + currentPlayer.userName);
            if(currentPlayer.highScore > this.gameHighScore) { // check for new
                this.gameHighScore = currentPlayer.highScore; // game high score
            }
            if (currentPlayer.extraLifeCredits === 3) {  // and if enough credits earned
                currentPlayer.addLives();               // add a life
                currentPlayer.resetExtraLifeCredits();  // then reset those credits
                                                    // reset to 0 when spent on a new life
            }
        } else {                                    // guesed wrong...
            currentPlayer.resetExtraLifeCredits();
            currentPlayer.subtractLives();
            if (currentPlayer.lives === 0) {
                currentPlayer.gameOver();
            }
        }
    }                                           // END RUNNING 21 TURNS
    console.log('End round ' + n + '  this game high score: ', this.gameHighScore + '\n', this.game);
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
    console.log(this.userName + ', Game Over!');
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

var game1 = new GameController(2);
var game2 = new GameController(3);

game1.game[1] instanceof Player;
game1 instanceof GameController;

game1.game[0].editUserName('barney');
game1.game[1].editUserName('fred');

game1.takeTurn();
game2.takeTurn();