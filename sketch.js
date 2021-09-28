var bg,back;
var bullet,bulletImg;
var enemy,enemyImg;
var player,playerImg,playerImg2;
var PLAY,END;
var gameState = 1;
var flag = 0;
var score = 0;
var stone,stoneImg;
var heart1,heratImg;
var heartImg2;

function preload(){
  bg = loadImage("back.jpg");
  enemyImg = loadImage("enemy.png")
  playerImg = loadImage("hunter.png")
  playerImg2 = loadImage("hunter2.png")
  bulletImg = loadImage("bullet.png")
  stoneImg = loadImage("rip.png")
  heartImg = loadImage("heart.png")
  heartImg2 = loadImage("broke.png")
}

function setup() {
  createCanvas(1000,650)
  
  player = createSprite(100,550,50,50);
  player.addImage(playerImg)
  player.scale = 0.4

  bullet = createSprite(player.x,player.y-65,1,1)

  score = 0

  stone = createSprite(500,500,1,1)
 
  heart1 = createSprite(760,30,20,20)
  heart1.addImage(heartImg)
  heart1.scale = 0.1

}

function draw() {
  background(bg); 
  textSize(40) 
   fill("white")
  text("Score: "+ score,800,50)
  if(gameState === 1){
    if(flag === 0){
      spawnEnemy();
      flag = 1
    }

    if(keyWentDown("space")){
      player.addImage(playerImg2)
      player.scale = 0.1
      createBullet()
     
    }
    if(bullet.isTouching(enemy)){
      enemy.destroy()
      bullet.destroy()
      score = score+100
      spawnEnemy()
      createBullet()
    }
    if(keyWentUp("space")){
      player.addImage(playerImg)
      player.scale = 0.4
    }
     if(keyDown("left")){
       player.velocityX = -3
     }
  
     if(keyDown("right")){
      player.velocityX = 3
    }
  
    if(keyDown("down")){
      player.velocityY = 3
    }
  
    if(keyDown("up")){
      player.velocityY = -3
    }  

    if(enemy.isTouching(player)){
      player.destroy()
      enemy.destroy()
     heart1.addImage(heartImg2)
    }
    

   
 
  }
  
  if(gameState === END){
   console.log("game ended")
  
      stone.addImage("ri",stoneImg)
      stone.scale = 0.1

      player.velocityX = 0;
      player.velocityY = 0
      enemy.velocityX = 0
      bullet.velocityX = 0
    }
  
  
  drawSprites();
}

function spawnEnemy() {
   
    enemy = createSprite(900,500,40,10);
    enemy.y = Math.round(random(550,500));
    enemy.addImage(enemyImg);
    enemy.scale = 0.2;
    enemy.velocityX = -4
}

function createBullet(){

  bullet.addImage(bulletImg)
  bullet.scale=0.05
  bullet.velocityX = 7
}