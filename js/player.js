function Player(game){
  this.x = 40;
  this.y = 45;
  this.game = game;

  this.vy = 10;
  this.vx = 10;

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
  )
};

Player.prototype.setListeners = function() {
 document.onkeydown = function(e){
  switch (e.keyCode) {
    case 38:
    this.y -= 10;
    break;
    case 40:
    this.y += 10;
    break;
    case 37:
    this.x -=10;
    break;
    case 39:
    this.x +=10
    break;
    }
  }.bind(this)
}

Player.prototype.animateImg = function() {

};

Player.prototype.move = function() {

};