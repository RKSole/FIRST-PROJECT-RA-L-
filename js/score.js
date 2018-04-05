
function Score (game){
  this.game = game;
  this.point = 0;

}


Score.prototype.incrementScore = function(){
  this.point = this.point + 5;
}

Score.prototype.draw = function () {
  this.game.ctx.font = "30px Nosifer",
  this.game.ctx.fillText("Score: " + this.point, 5, 26);
  this.game.ctx.fillStyle = "white"
};