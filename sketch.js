var bullet,wall,speed,height,thickness

function setup() {
  createCanvas(1600,400);
 speed = random (55,90)
 weight = random (400,1500)

 bullet = createSprite (50,200,25,0)
 bullet.velocityX = speed

bullet.shapeColor = color()

wall = createSprite (1200,200,thickness,height/2)
wall.shapeColor = color (80,80,80)
 
}

function draw() {
  background(0); 
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/22500;
	if(damage>180)
	{
		bullet.shapeColor=color(255,0,0);
	}
    
	if(damage<180 && damage>100)
	{
		bullet.shapeColor=color(0,225,0);
	}

	if(damage<100)
	{
		bullet.shapeColor=color("green");
	}

	thickness:random(22,83)
	speed:random(223,321)
	weight:random(30,52)

  }  
  drawSprites();
}