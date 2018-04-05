function Player(game) {
  this.x = 40;
  this.y = 40;
  this.game = game;

  this.v = 40;

  this.width = 35;
  this.height = 35;

  this.img = new Image();
  this.img.src = "images/spritesI.png";
  this.img.frames = 6;
  this.img.frameIndex = 1;
  this.setListeners();
}

Player.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.img,
    this.img.frameIndex * (this.img.width / this.img.frames),
    0,
    this.img.width / this.img.frames,
    this.img.height,
    this.x,
    this.y,
    this.width,
    this.height
  );
};

Player.prototype.setListeners = function() {
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38:
        if (this.y < 42) {
          this.y = 40;
          return;
        } else {
          this.move("y", -1);
        }
        break;

      case 40:
        if (this.y >= this.game.canvas.height - 82) {
          this.y = this.game.canvas.height - 80;
          return;
        } else {
          this.move("y", 1);
        }
        break;

      case 37:
        if (this.x < 42) {
          this.x = 40;
          return;
        } else {
          this.move("x", -1);
        }
        break;

      case 39:
        if (this.x >= this.game.canvas.width - 82) {
          this.x = this.game.canvas.width - 80;
          return;
        } else {
          this.move("x", 1);
        }
        break;
    }
  }.bind(this);
};

Player.prototype.animateImg = function() {};

Player.prototype.move = function(coor, v) {
  var x = this.x;
  var y = this.y;
  if (coor === "x") x += v * this.v;
  if (coor === "y") y += v * this.v;
  console.log(x,y);
  if (!this.game.checkIfCollision(x, y, this.game.obstacle.rockBlocks)) {
    if (coor === "x") this.x += v * this.v;
    if (coor === "y") this.y += v * this.v;
  } else {
    console.log("collision");
  }
  if (this.game.checkIfCollision(x, y, this.game.obstacle.mineBlocks)) {
    alert("Game Over");
  }
  if (this.game.checkIfCollision(x, y, this.game.obstacle.gemBlocks)) {
    this.game.score.incrementScore();
  }
};
