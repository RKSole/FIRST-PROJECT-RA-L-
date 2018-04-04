function Obstacle(game){
 this.game = game;
  this.imgGrid = new Image();
  this.imgGrid.src = "images/vLLgDyu.png";
  this.imgeRock = new Image();
  this.imgeRock.src = "images/Dq6ZD3l.png";
  this.imgeGem = new Image();
  this.imgeGem.src = "images/pink-diamond-1056757_640.png";
  this.imgeMine = new Image();
  this.imgeMine.src = "images/Mine.png";
  this.sandBlocks = [];
  this.createSand();
  

  this.gridX = 33;
  this.gridY = 16;
  this.arrObs = [
    [
      Math.ceil(Math.random() * (this.gridX - 1)),
      Math.ceil(Math.random() * (this.gridY - 1))
    ]
  ];
  this.numMines = 30;
  this.numGems = 50;
  this.numRocks = 150;
  this.numObs = this.numMines + this.numGems + this.numRocks;

  this.rockBlocks = [];
  this.gemBlocks = [];
  this.mineBlocks = [];
  this.createAll();
}


Obstacle.prototype.createAll = function() {
  var x, y;
  while (this.arrObs.length < this.numObs) {
    x = Math.ceil(Math.random() * (this.gridX - 1));
    y = Math.ceil(Math.random() * (this.gridY - 1));
    this.arrObs.push([x, y]);
    console.log(x,y)
    for (var i = 0; i < this.arrObs.length - 1; i++) {
      if ((this.arrObs[i][0] === x && this.arrObs[i][1] === y) || (x=== 1 && y === 1)) {
        console.log(x,y)
        this.arrObs.pop();
        break;
      }
    }
  }
  this.rockBlocks = this.arrObs.splice(0, this.numRocks);
  this.gemBlocks = this.arrObs.splice(0, this.numGems);
  this.mineBlocks = this.arrObs.splice(0, this.numMines);
};

Obstacle.prototype.drawGrid = function() {
  for (i = 0; i < this.sandBlocks.length; i++) {
    this.game.ctx.drawImage(
      this.imgGrid,
      this.sandBlocks[i].x,
      this.sandBlocks[i].y,
      40,
      40
    );
  }
  for (i = 0; i < this.rockBlocks.length; i++) {
    this.game.ctx.drawImage(
      this.imgeRock,
      this.rockBlocks[i][0] * 40,
      this.rockBlocks[i][1] * 40,
      35,
      35
    );
  }
  for (i = 0; i < this.gemBlocks.length; i++) {
    this.game.ctx.drawImage(
      this.imgeGem,
      this.gemBlocks[i][0] * 40,
      this.gemBlocks[i][1] * 40,
      40,
      40
    );
  }
  for (var j = 0; j < this.mineBlocks.length; j++) {
    var x = this.mineBlocks[j];
    this.game.ctx.drawImage(this.imgeMine, x[0] * 40, x[1] * 40, 40, 40);
  }
};

Obstacle.prototype.createSand = function() {
  var w = this.game.canvas.width;
  var h = this.game.canvas.height;

  for (x = 40; x <= w - 40; x += 40) {
    for (y = 40; y <= h - 40; y += 40) {
      this.sandBlocks.push({ x: x, y: y });
    }
  }
};

