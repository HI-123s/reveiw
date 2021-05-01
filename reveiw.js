var ball;
function setup(){
    createCanvas(500,500);
    var box=createSprite(100,100,400,20);
     var ball=createSprite(200,300,20,20);

    
}
function draw(){
background("pink")

    if(keyDown("LEFT_ARROW")){
      ball.velocityX=-1;
  }
  if(keyDown("RIGHT_ARROW")){
      ball.velocityX=1
  }
  if(keyDown("UP_ARROW")){
      ball.velocityY=-1
  }
if(keyDown("DOWN_ARROW")){
    ball.velocityY=1
}
    drawSprites();
}
    
