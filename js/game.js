function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.background = new Background(this);
  this.reset();
}

Game.prototype.start = function() {
  setInterval(
    function() {
      this.draw();
      this.moveAll();
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
  this.score = new Score(this)
};

Game.prototype.isCollision = function() {
  return this.obstacles.some(function (o) {
    return (this.player.x + this.player.width > o.x) &&
      (o.x + o.width > this.player.x) && 
      (this.player.y + this.player.height > o.y)
  }.bind(this))
};

Game.prototype.draw = function() {
  this.background.draw();
  this.background.drawGrid();
  this.background.drawBorder();
  this.player.draw();
  this.score.draw();
};

Game.prototype.moveAll = function() {
  this.background.move();
  this.player.move();
};
