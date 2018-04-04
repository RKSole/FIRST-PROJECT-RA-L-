function Player(game) {
  this.x = 40;
  this.y = 42;
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
        if (this.y < 82) {
          this.v === 0;
          return;
        } else {
          this.y -= this.v;
        }
        break;

      case 40:
        if (this.y >= this.game.canvas.height - 82) {
          this.v === 0;
          return;
        } else {
          this.y += this.v;
        }
        break;

      case 37:
        if (this.x < 42) {
          this.x === 0;
          return;
        } else {
          this.x -= this.v;
        }
        break;

      case 39:
        if (this.x >= this.game.canvas.width - 82) {
          this.x === 0;
          return;
        } else {
          this.x += this.v;
        }
        break;
    }
  }.bind(this);
};

Player.prototype.animateImg = function() {};

Player.prototype.move = function() {
if 
};
