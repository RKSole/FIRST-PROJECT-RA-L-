
function Score (game){
  this.game = game;
  this.point = 0;

}


Score.prototype.incrementScore = function(){
  this.point++
}

Score.prototype.draw = function () {
  this.game.ctx.font = "40px sans-serif",
  this.game.ctx.fillText("Score: " + this.point, 3, 33);
  this.game.ctx.fillStyle = "gold"
};