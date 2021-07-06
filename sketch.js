var pathImg,path
var runner,Jaxson
function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  runner=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=4
  path.scale=1.2

Jaxson=createSprite(200,200,20,20)
Jaxson.addAnimation("Jaxson",runner)
Jaxson.scale=.1

invisibleGround=createSprite(100,200,400,20)
invisibleGround.visible=false

}

function draw() {
  background(0);
if(path.y>400){
  path.y=height/2
}
Jaxson.x=World.mouseX
drawSprites()
}
