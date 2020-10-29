var Pheonix

var speed, weight;





function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);

  Pheonix = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  Pheonix.velocityX = speed;
}

function draw() {
  background(255,255,255); 


  if(wall.x-Pheonix.x < (Pheonix.width+wall.width)/2)
  {
    Pheonix.velocityX = speed;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      Pheonix.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      Pheonix.shapeColor = color(230,230,0);
    }

    if(deformation<100)
    {
      Pheonix.shapeColor=color(0.255,0);
    }
  }
  drawSprites();



}