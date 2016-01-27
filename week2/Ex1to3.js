// Write a Player constructor function that has username, 
// score and highScore properties. Add an updateScore method 
// that will increment a player's score when called and 
// update the highScore property if the score is greater 
// than the current high score.

// 2) Add a gameOver method to your Player class that will
// reset the user's score.

// 3) Add a lives property and subtractLife and addLife methods that will increment
// or decrement a player's lives. A new player should start off with 3 lives.


function Player(userName, score, highScore) {
    
    this.userName = userName;
    this.score = score;
    this.highScore = highScore;
    this.lives = 3;
}

Player.prototype.updateScores = function updateScores() {
    this.score++;
    if (this.score > this.highScore) {
        this.highScore = this.score;
    }
}

Player.prototype.gameOver = function gameOver() {
    this.score = 0;
}

 Player.prototype.addLives = function addLives() {
    this.lives++;
}

Player.prototype.subtractLives = function subtractLives() {
    this.lives--;
}



// ----- testing below -----

bob = new Player("bobbo", 31, 33);
fred = new Player("freddie", 10, 12);

bob.updateScores();
console.log(bob);
bob.updateScores();
console.log(bob);
bob.updateScores();
console.log(bob);
fred.updateScores();
console.log(fred);