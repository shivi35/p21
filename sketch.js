var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50,200,50 , 10);
  bullet.velocityX = speed;
  bullet.shapeColor="black";
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

}

function draw() {
  background(255,255,255);  

  (hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false;
}