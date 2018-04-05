function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.interval;
  this.background = new Background(this);
  this.obstacle = new Obstacle(this);
  this.player;
  this.score;
  this.reset();
  
}

Game.prototype.checkIfCollision = function(x, y, typeObs) {
  var arr = typeObs;
  var collision = false;
 
  for (var i = 0; i< arr.length; i++) {
      if (
      x < arr[i][0]*40 + 40 &&
      x + 40 > arr [i][0]*40 &&
      y < arr[i][1]*40 + 40 &&
      40 + y > arr[i][1]*40) 
      {
        collision = true;
        if (arr === this.obstacle.gemBlocks || arr === this.obstacle.sandBlocks) {
          arr.splice(i,1);
        }
      }
   }
    return collision;
}

Game.prototype.checkIfOccupied = function() {
  var collision = false;
 
  this.obstacle.arrObs.forEach(obs => {
    this.obstacle.sandBlocks.forEach((sand, index) => {      
      if (
        obs[0] * 40 < sand[0] * 40 + 40 &&
        obs[0] * 40 + 40 > sand[0] * 40 &&
        obs[1] * 40 < sand[1] * 40 + 40 &&
        40 + obs[1] * 40 > sand[1] * 40
      ) 
    {
      
      this.obstacle.sandBlocks.splice(index, 1);
    }
  });
});
    return collision;
}


Game.prototype.start = function() {
  this.interval = setInterval(
    function() {
      this.draw();
    }.bind(this),
    30
  );
};

Game.prototype.stop = function() {
  clearInterval(this.interval);
};

Game.prototype.gameOver = function() {
  this.stop();
  if (confirm("GAME OVER. Play again?")) {
    this.reset();
    this.start();
  }
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.score = new Score(this);
  this.checkIfOccupied();
};

Game.prototype.draw = function() {
  this.background.draw();
  this.obstacle.drawGrid();
  this.background.drawBorder();
  this.player.draw();
  this.score.draw();
};

