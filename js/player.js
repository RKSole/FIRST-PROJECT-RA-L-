function Player(game){
  this.x = 50;
  this.y = 40;
  this.game = game;
  

  this.width = 20;
  this.height = 50;

  this.img = new Image();
  this.img.src = "images/player.png";
  this.img.frames = 3;
  this.img.frameIndex = 1;
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

};

Player.prototype.animateImg = function() {

};

Player.prototype.move = function() {

};