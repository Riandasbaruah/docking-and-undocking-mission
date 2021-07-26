var iss,spacecraft
var bg,issImg,scImg,scImg1,scImg2,scImg3
var hasdocked = false 


function preload(){
  bg = loadImage("Docking-undocking/spacebg.jpg")
  issImg = loadImage("Docking-undocking/iss.png")
  scImg = loadImage("Docking-undocking/spacecraft1.png")
  scImg1 = loadImage("Docking-undocking/spacecraft2.png")
  scImg2 = loadImage("Docking-undocking/spacecraft3.png")
  scImg3 = loadImage("Docking-undocking/spacecraft4.png")
  
}


function setup() {
  createCanvas(600,400);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(scImg);
  spacecraft.scale = 0.15

  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.25 
}

function draw() {
  background(bg); 
  
  if(!hasdocked){
    spacecraft.x = spacecraft.x + random(-1,1)

  if(keyDown(UP_ARROW)){
    spacecraft.y = spacecraft.y-2
  }

  if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(scImg1)
  }

  if(keyDown(LEFT_ARROW)){
    spacecraft.x = spacecraft.x-1
    spacecraft.addImage(scImg3)
  }

  if(keyDown(RIGHT_ARROW)){
    spacecraft.x = spacecraft.x+1
    spacecraft.addImage(scImg2)
  }

  }

  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasdocked=true;
    textSize(25)
    fill("white")
    text("docking successful", 200,300)
  }
  drawSprites();
}