var bullet, bulletSpeed, bulletWeight, bulletImg;
var wall, thickness, damage;

function preload(){
  bulletImg = loadImage("Bullets.png");
}

function setup() {
  createCanvas(1000,400);

  bulletSpeed = Math.round(random(223,321));
  bulletWeight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));

  wall = createSprite(900,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet = createSprite(50,200,50,10);
  bullet.addImage(bulletImg);
  bullet.scale = 0.5;
  bullet.velocityX = bulletSpeed;
}

function draw() {
  background("black");

  text("Bullet Speed:" + bulletSpeed, 40,40);
  text("Bullet Weight:" + bulletWeight,170,40);
  text("Wall Thickness:" + thickness,300,40);

  //bullet.x = World.mouseX;
  //bullet.y = World.mouseY;
  

  if(hasCollided(bullet,wall)){
      
    bullet.velocityX = 0;
    damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = color(255,0,0);
      textSize(20);
      fill(255,0,0);
      text("Damage: " + Math.round(damage), 400,200);
      bullet.x = wall.x + 30;
    }

    if(damage<10){
      wall.shapeColor = color(0,255,0);
      textSize(20);
      fill(0,255,0);
      text("Damage: " + Math.round(damage), 400,200);
      bullet.x = wall.x - 10;
    }
  }
  
  drawSprites();
}

function hasCollided(lBullet,lWall){

  bulletRightEdge = lBullet.x + lBullet.width;
  wallLeftEdge = lWall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }else{
    return false;
  }
  

}