// Write a Player constructor function that has username, 
// score and highScore properties. Add an updateScore method 
// that will increment a player's score when called and 
// update the highScore property if the score is greater 
// than the current high score.

// 2) Add a gameOver method to your Player class that will
// reset the user's score.

// 3) Add a lives property and subtractLife and addLife methods that will increment or decrement a player's lives. A new player should start off with 3 lives.

// 4) Create a function called GameController that takes a Player as an argument 
// along with a guess (in this case it will be any number from 1 - 10). When your 
// function is called it should generate a random number from 1 - 10 and give the 
// user 10 points for every correct answer. If the guess is incorrect then the user 
// will lose a life. When a user has zero lives left this function will log "Game Over!"
// to the console and reset the user's score.

// Slack: "You can use (or alter) the reset method to award a player three new lives
// and reset the score if there is a "game over" event."

// Bonus: if the user gets three guesses correct in a row award them an extra life!

// Add an editUserName method to your Player constructor that will allow the user to 
// update their user name.


function gameController(player, guess) {
    
    var guessMe = Math.floor(Math.random() * 10) + 1; 
        // random number from 1 - 10
        console.log('guess: ' + guess + '   match: ' + guessMe);
    var players = [];
    var globalHighScore = 0;
    
    if (guess === guessMe) {
        player.updateScores();
        player.bonusLifeCredit(); 
        if (player.extraLifeCredits === 3) {
            player.addLives();
            player.resetExtraLifeCredits(); // reset to 0 when spent on a new life
        }
    } else {
        player.resetExtraLifeCredits();
        player.subtractLives();
        if (player.lives === 0) {
            player.gameOver();
        }
    }
}



function Player(userName) {
    
    this.userName = userName;
    this.score = 0;
    this.highScore = 0;
    this.lives = 3;
    this.extraLifeCredits = 0;
}

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

var bob = new Player('bobbo');
var fred = new Player('freddie');

gameController(bob, 6);
console.log(bob);
bob.editUserName('bobberino');
gameController(bob, 6);
console.log(bob);
gameController(bob, 6);
console.log(bob);
gameController(bob, 6);
console.log(bob);
gameController(bob, 6);
console.log(bob);
gameController(bob, 6);
console.log(bob);
gameController(bob, 6);
console.log(bob);
gameController(bob, 6);
console.log(bob);
gameController(fred, 6);
console.log(fred);
gameController(fred, 6);
console.log(fred);
gameController(fred, 6);
console.log(fred);
gameController(fred, 6);
console.log(fred);
gameController(fred, 6);
console.log(fred);
gameController(fred, 6);
console.log(fred);
gameController(fred, 6);
console.log(fred);
gameController(bob, 6);
console.log(bob);
gameController(fred, 6);
console.log(fred);


