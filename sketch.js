
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600, 410) 
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -5;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
background("lightblue");  
drawSprites();
  
  stroke("red");
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);

  
  console.log(monkey.y)
  
  monkey.collide(ground);
  
  if(ground.x<200){
      ground.x = ground.width/2;
  }
  if(keyDown("space") && monkey.y >= 310){
   monkey.velocityY = -13; 
  }
  
  monkey.velocityY = monkey.velocityY + 0.4
  
  createFood();
  spawnObstacles();
}

function createFood(){
  if(frameCount % 80 === 0){
  banana = createSprite(620, Math.round(random(120,200)), 40, 10);
  banana.addImage(bananaImage);
  banana.velocityX = -5;
  banana.scale = 0.09;
  banana.lifetime = 160  
  
  }
  }

function spawnObstacles(){
  if(frameCount % 140 === 0){
  obstacle = createSprite(620, 310, 40, 10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -5; 
  obstacle.lifetime = 175;
  obstacle.scale = 0.25  
  
  }
  }




