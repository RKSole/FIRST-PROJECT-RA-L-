function Player(game){
  this.x = 40;
  this.y = 45;
  this.game = game;

  this.vy = 40;
  this.vx = 40;

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
    if (this.y < 82){
    this.vy === 0;
    return;
    }else{
    this.y -= this.vy;
    }
    break;

    case 40:
    if (this.y >= this.game.canvas.height-82){
      this.vy === 0;
      return;
    }else{
      this.y += this.vy;
    }
    break;

    case 37:
    if (this.x < 42){
      this.vx === 0;
      return;
    }else {
      this.x -= this.vx;
    }
    break;

    case 39:
    if (this.x >= this.game.canvas.width-82){
      return;
      this.vx === 0;
    }else{
    this.x += this.vx;
    }
    break;

    }
  }.bind(this)
}

Player.prototype.animateImg = function() {

};

Player.prototype.move = function() {

};