var path , pathImg ;
var runner , runnerImg;
var invisibleBoundary ;
var invisibleBoundary2 ;

function preload(){
  pathImg= loadImage("path.png")
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png");

}

function setup()
{
  createCanvas(600,400);

  path = createSprite(300,0);
  path.addImage("path", pathImg);
  path.velocityY+=10

  runner=createSprite(300,340,10,10);
  runner.addAnimation("runner" , runnerImg);
  runner.scale = 0.05
}



function draw() {
  background(0);


//make the path infinite






  if (keyDown("right")){
    runner.x +=2
  }


  if (keyDown("left")){
    runner.x-=2 
  }
  if (keyDown("up")){
    runner.y-=2 
  }
  if (keyDown("down")){
    runner.y-=2 
  }




  
 
  createEdgeSprites();
  // SpawnInvisibleBoundary();
 
  drawSprites();



} 




// function SpawnInvisibleBoundary() {
//   if (frameCount % 50 === 0) {
//   invisibleBoundary = createSprite(160,200,20,400);
//   invisibleBoundary.visible = false;
//   invisibleBoundary2 = createSprite(445,200,20,400);
//   invisibleBoundary2.visible = false;

//   }
// }



