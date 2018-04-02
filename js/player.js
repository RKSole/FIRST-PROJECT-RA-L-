function Player(game){
  this.x = 1;
  this.y = 1;
  this.game = game;
  

  this.width = 20;
  this.height = 50;

  this.img = new Image();
  this.img.src = "images/sprites.png";
}

Player.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.img,
    this.img.frameIndex * (this.img.width /this.img.frames),
    0,
    this.img.width / this.img.frames,
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