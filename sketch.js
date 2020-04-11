let res = 1;

function setup() {
  createCanvas(400, 400);
  frameRate(16);
  snake = new Snake;
}

function draw() {
  background(220);
  scale(res);
  snake.update();
  snake.show();
    

}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
     snake.setDir(-1, 0);
  }else if(keyCode == RIGHT_ARROW){
     snake.setDir(1, 0);
  }else if(keyCode == UP_ARROW){
     snake.setDir(0, -1);
  }else if(keyCode == DOWN_ARROW){
     snake.setDir(0, 1);
  }
  if(keyCode == 32){
    
  }
}
