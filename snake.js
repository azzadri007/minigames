class Snake {

  constructor() {
    this.body = [];
    this.body[0] = createVector(0,0);
    this.xdir = 0;
    this.ydir = 0;
    this.color = "rgba("+255+ ", 0, 0, 0.25)";
    
  }
  update() {
    this.body[0].x += this.xdir;
    this.body[0].y += this.ydir;
  }
  show() {
    fill(this.color);
    rect(this.body[0].x, this.body[0].y, 10,10);
  }
  setDir(x, y){
    this.xdir = x;
    this.ydir = y;
  }
}