// Enemies our player must avoid

var Enemy = function() {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// Collision detection and initiate collision function

Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (player.x < this.x + 60 &&
     player.x + 60 > this.x &&
     player.y < this.y + 60 &&
     player.y + 60 > this.y) {collision()};
};

// Draw the enemy on the screen and set speed, required method for game

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    if (this.x > 500) {
      this.x = -50;
      this.speed = Math.floor(Math.random() * 400) + 100;
    }
};

// Set enemy starting positions
//y co-ordinates of enemies

var enemyPosition = [63, 145, 227];

// Place all enemy objects in an array called allEnemies

var allEnemies = [];

enemyPosition.forEach(function(position){
  allEnemies.push(new Enemy(x=0, y=position, this.speed = Math.floor(Math.random() * 400) + 100))
});


// Place the player object in a variable called player

var Player = function() {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

var player = new Player (x=200, y=405);

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Check player has reached winning position

Player.prototype.update = function() {
    if(this.y===-10) {
      modalOperation();
    };
};

// Handle player movement, limit player movemment outside of canvas

Player.prototype.handleInput = function(key) {
  if (key==='up') {
    if (this.y >=73) {
    this.y = this.y - 83;
  };
  }
  if (key==='down') {
    if (this.y <=404) {
    this.y = this.y + 83;
  };
  }
  if (key==='left') {
    if (this.x >=100) {
    this.x = this.x - 100;
  };
  }
  if (key==='right') {
    if (this.x <=300) {
    this.x = this.x + 100;
  };
  }
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

// Opens the congratulations pop-up when player reaches the water

function modalOperation () {
    var endGame = document.getElementById('Congratulations')
    endGame.style.display='block';
    var closeModal = document.getElementById('close');
    closeModal.addEventListener("click", function(){
    player.y=405;
    player.x=200;
    endGame.style.display='none';
  })};

// Reports collision and resets player position

function collision () {
      var collide = document.getElementById('Collision');
      collide.style.display='block';
      player.x=200;
      player.y=405;
      setTimeout(function(){
        collide.style.display='none';
      },1000);
    };
