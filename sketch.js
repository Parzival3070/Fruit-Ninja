//create the sword and swordImage varible
var sword, swordImage;

//create the peach varibles
var peach, peachImage, peachGroup;

//create the peach1 varibles
var peach1, peach1Image, peach1Group;

//create the apple varibles
var apple, appleImage, appleGroup;

//create the apple1 varibles
var apple1, apple1Image, apple1Group;

//create the pear varibles
var pear, pearImage, pearGroup;

//create the pear1 varibles
var apple1, apple1Image, apple1Group;

//create the bannana varibles
var bannana, bannanaImage, bannanaGroup;

//create the bannana1 varibles
var bannana1, bannana1Image, bannana1Group;

//create the alien varibles
var alien, alienImage, alienGroup;

//create the alien1 varibles
var alien1, alien1Image, alien1Group;

//create the ship varibles
var ship, shipImage, shipGroup;

//create the ship1 varibles
var ship1, ship1Image, ship1Group;

//create the swoosh sound varible
var swoosh;

//create the game over picture varible
var gameoverPic, gameoverImage;

//create the gamestates
var gameState = 1;
var PLAY = 1;
var END = 0;

//create the score
var score;


function preload()

{

  //preload the sword image to the swordImage varible
  swordImage = loadImage('sword.png');

  //preload the peach image to the peachImage varible
  peachImage = loadImage('fruit1.png');

  //preload the peach image to the peach1Image varible
  peach1Image = loadImage('fruit1.png');

  //preload the apple image to the appleImage varible
  appleImage = loadImage('fruit2.png');

  //preload the apple image to the apple1Image varible
  apple1Image = loadImage('fruit2.png');

  //preload the pear image to the pearImage varible
  pearImage = loadImage('fruit3.png');

  //preload the pear image to the peach2Image varible
  pear1Image = loadImage('fruit3.png');

  //preload the bannana image to the bannanaImage varible
  bannanaImage = loadImage('fruit4.png');

  //preload the bannana image to the bannana1Image varible
  bannana1Image = loadImage('fruit4.png');

  //preload the alien iamge to the alienImage varible
  alienImage = loadImage('alien1.png');

  //preload the alien image to the alien1Image varible
  alien1Image = loadImage('alien1.png');

  //preload the ship image to the shipImage varible
  shipImage = loadImage('alien2.png');

  //preload the ship image to the ship1Image varible
  ship1Image = loadImage('alien2.png');

  //preload the swoosh sound
  swoosh = loadSound('knifeSwooshSound.mp3');

  //preload the gameover sound
  gameover = loadSound('gameover.mp3');

  //preload the gameover image
  gameoverImage = loadImage('gameover.png');

}


function setup()

{

  //create the canvas
  createCanvas(2550, 1300);

  //create the sword varible and add the image to it and scale it
  sword = createSprite(-20, 650, 10, 10);
  sword.addImage(swordImage);
  sword.scale = 0.7;

  //create the game over photo sprite and make it invisible
  gameoverPic = createSprite(1275, 650, 10, 10);
  gameoverPic.addImage(gameoverImage);
  gameoverPic.visible = false;

  //create the fruits and aliens group
  peachGroup = new Group();
  peach1Group = new Group();
  appleGroup = new Group();
  apple1Group = new Group();
  pearGroup = new Group();
  pear1Group = new Group();
  bannanaGroup = new Group();
  bannana1Group = new Group();
  alienGroup = new Group();
  alien1Group = new Group();
  shipGroup = new Group();
  ship1Group = new Group();

  //set the score to 0
  score = 0;

}


function draw()

{

  //set the background to light blue
  background('lightblue');

  //create score text
  textSize(30);
  fill('white');
  text('Score:' + score, 30, 50);

  //if the game state is PLAY:
  if (gameState === PLAY)

  {

    //sword position is mouse position
    sword.x = mouseX;
    sword.y = mouseY;

  }
  
  //if any badguys are touching the sword
  if (alienGroup.isTouching(sword) || alien1Group.isTouching(sword) || shipGroup.isTouching(sword) || ship1Group.isTouching(sword))

  {
    
    //set the game state to end, the score to 0, and play a sound
    gameState = END;
    score = 0;
    sound.play();

  }

  //if game state is end
  if (gameState === END)

  {
    
    //make the game over photo visible and play the game over sound
    gameoverPic.visible = true;
    gameover.play();

    //destroy everything
    peachGroup.destroyEach();
    peach1Group.destroyEach();
    appleGroup.destroyEach();
    apple1Group.destroyEach();
    pearGroup.destroyEach();
    pear1Group.destroyEach();
    bannanaGroup.destroyEach();
    bannana1Group.destroyEach();
    alienGroup.destroyEach();
    alien1Group.destroyEach();
    shipGroup.destroyEach();
    ship1Group.destroyEach();

  }

  //is the peach group is touching the sword
  if (peachGroup.isTouching(sword))

  {
    
    //destroy peach, increase score and play swoosh sound
    peachGroup.destroyEach();
    score = score + 1;
    swoosh.play();

  }

  //is the peach1 group is touching the sword
  if (peach1Group.isTouching(sword))

  {
    
    //destroy peach1, increase score, and play swoosh sound
    peach1Group.destroyEach();
    score = score + 1;
    swoosh.play();

  }

  //if apple group is touching sword
  if (appleGroup.isTouching(sword))

  {
    
    //destroy the apple, increase score, and play the swoosh sound
    appleGroup.destroyEach();
    score = score + 2;
    swoosh.play();

  }

  //if apple1 group is touching sword
  if (apple1Group.isTouching(sword))

  {

    //destroy the apple1, increase score, and play the swoosh sound
    apple1Group.destroyEach();
    score = score + 2;
    swoosh.play();

  }

  //if pear group is touching sword
  if (pearGroup.isTouching(sword))

  {

    //destroy the pear, increase the score, and play the swoosh sound
    pearGroup.destroyEach();
    score = score + 3;
    swoosh.play();

  }

  //if pear1 group is touching sword
  if (pear1Group.isTouching(sword))

  {

    //destroy the pear1, increase the score, and play the swoosh sound
    pear1Group.destroyEach();
    score = score + 3;
    swoosh.play();

  }

  //if bannana is touching sword
  if (bannanaGroup.isTouching(sword))

  {

    //destroy bannana, increaes the score, and play the swoosh sound
    bannanaGroup.destroyEach();
    score = score + 4;
    swoosh.play();

  }

  //if bannana is touching sword
  if (bannana1Group.isTouching(sword))

  {

    //destroy bannana1, increase the score, and play the swoosh sound
    bannana1Group.destroyEach();
    score = score + 4;
    swoosh.play();

  }

  //select a fruit image 
  var select_fruit = Math.round(random(1, 4));

  //apply it every 80 fps
  if (World.frameCount % 160 === 0)

  {

    //assign numbers to images so the computer can choose
    if (select_fruit === 1)

    {
      
      //spwan some fruits
      PEACH();
      BANNANA();
      PEAR();
      ALIEN();
      SHIP();

      //randomize the y of the fruits
      alien.y = random(50, 1250);
      ship.y = random(50, 1250);
      peach.y = random(50, 1250);
      bannana.y = random(50, 1250);
      pear.y = random(50, 1250);
      alien1.y = random(50, 1250);
      ship1.y = random(50, 1250)
      peach1.y = random(50, 1250);
      bannana1.y = random(50, 1250);
      pear1.y = random(50, 1250);

    } 
    
    else if (select_fruit === 2)

    {

      //spwan some fruits
      APPLE();
      BANNANA();
      ALIEN();

      //randomize the y of the fruits
      alien.y = random(50, 1250);
      apple.y = random(50, 1250);
      bannana.y = random(50, 1250);
      alien1.y = random(50, 1250);
      apple1.y = random(50, 1250);
      bannana1.y = random(50, 1250);

    } 
    
    else if (select_fruit === 3)

    {

      //spwan some fruits
      PEAR();
      BANNANA();
      PEACH();
      APPLE();
      ALIEN();
      SHIP();

      //randomize the y of the fruits
      ship.y = random(50, 1250)
      alien.y = random(50, 1250);
      peach.y = random(50, 1250);
      apple.y = random(50, 1250);
      pear.y = random(50, 1250);
      bannana.y = random(50, 1250);
      ship1.y = random(50, 1250)
      alien1.y = random(50, 1250);
      peach1.y = random(50, 1250);
      apple1.y = random(50, 1250);
      pear1.y = random(50, 1250);
      bannana1.y = random(50, 1250);

    } 
    
    else

    {
 
      //spwan some fruits
      BANNANA();
      PEACH();
      ALIEN();
      SHIP();

      //randomize the y of the fruits
      ship.y = random(50, 1250)
      alien.y = random(50, 1250);
      peach.y = random(50, 1250);
      bannana.y = random(50, 1250);
      ship1.y = random(50, 1250)
      alien1.y = random(50, 1250);
      peach1.y = random(50, 1250);
      bannana1.y = random(50, 1250);

    }

  }


  //draw the sprites
  drawSprites();

}


//create the alien function
function ALIEN()

{

  //create the alien sprite add the image and scale it
  alien = createSprite(-20, 650, 10, 10);
  alien.addImage(alienImage);
  alien.scale = 1;

  //add velocity
  alien.velocityX = 15 + (score / 10);

  //add to alien group
  alienGroup.add(alien);

  //lifetime
  alien.lifetime = (200);

  //create the alien1 sprite add the image and scale it
  alien1 = createSprite(2570, 650, 10, 10);
  alien1.addImage(alien1Image);
  alien1.scale = 1;

  //add velocity
  alien1.velocityX = -15 - (score / 10);

  //add to alien group
  alien1Group.add(alien1);

  //lifetime
  alien1.lifetime = (200);

}


//create the ship function
function SHIP()

{

  //create the ship sprite add the image and scale it
  ship = createSprite(-20, 650, 10, 10);
  ship.addImage(shipImage);
  ship.scale = 1.5;

  //add velocity
  ship.velocityX = 15 + (score / 10);

  //lifetime
  ship.lifetime = (200);

  //add to alien group
  shipGroup.add(ship);

  //create the ship1 sprite add the image and scale it
  ship1 = createSprite(2570, 650, 10, 10);
  ship1.addImage(ship1Image);
  ship1.scale = 1.5;

  //add velocity
  ship1.velocityX = -15 - (score / 10);

  //lifetime
  ship1.lifetime = (200);

  //add to ship1 group
  ship1Group.add(ship1);

}


//create the peach function
function PEACH()

{

  //create the peach sprite add the image and scale it
  peach = createSprite(-20, 650, 10, 10);
  peach.addImage(peachImage);
  peach.scale = 0.15;

  //add velocity
  peach.velocityX = 15 + (score / 10);

  //lifetime
  peach.lifetime = (200);

  //add peach to a group
  peachGroup.add(peach);

  //create the peach1 sprite add the image and scale it
  peach1 = createSprite(2570, 650, 10, 10);
  peach1.addImage(peach1Image);
  peach1.scale = 0.15;

  //add velocity
  peach1.velocityX = -15 - (score / 10);

  //lifetime
  peach1.lifetime = (200);

  //add to peach1 group
  peach1Group.add(peach1);

}


//create the apple function
function APPLE()

{

  //create the apple sprite add the image and scale it
  apple = createSprite(-20, 650, 10, 10);
  apple.addImage(appleImage);
  apple.scale = 0.15;

  //add velocity
  apple.velocityX = 15 + (score / 10);

  //lifetime
  apple.lifetime = (200);

  //add apple to a group
  appleGroup.add(apple);

  //create the apple1 sprite add the image and scale it
  apple1 = createSprite(2570, 650, 10, 10);
  apple1.addImage(apple1Image);
  apple1.scale = 0.15;

  //add velocity
  apple1.velocityX = -15 - (score / 10);

  //lifetime
  apple1.lifetime = (200);

  //add to alien group
  apple1Group.add(apple1);

}


//create the pear function
function PEAR()

{

  //create the pear sprite add the image and scale it
  pear = createSprite(-20, 650, 10, 10);
  pear.addImage(pearImage);
  pear.scale = 0.15;

  //add velocity
  pear.velocityX = 15 + (score / 10);

  //lifetime
  pear.lifetime = (200);

  //add apple to a group
  pearGroup.add(pear);

  //create the pear1 sprite add the image and scale it
  pear1 = createSprite(2570, 650, 10, 10);
  pear1.addImage(pear1Image);
  pear1.scale = 0.15;

  //add velocity
  pear1.velocityX = -15 - (score / 10);

  //lifetime
  pear1.lifetime = (200);

  //add to alien group
  pear1Group.add(pear1);

}


//create the apple function
function BANNANA()

{


  //create the bannana sprite add the image and scale it
  bannana = createSprite(-20, 650, 10, 10);
  bannana.addImage(bannanaImage);
  bannana.scale = 0.15;

  //add velocity
  bannana.velocityX = 15 + (score / 10);

  //lifetime
  bannana.lifetime = (200);

  //add apple to a group
  bannanaGroup.add(bannana);

  //create the bannana1 sprite add the image and scale it
  bannana1 = createSprite(2570, 650, 10, 10);
  bannana1.addImage(bannana1Image);
  bannana1.scale = 0.15;

  //add velocity
  bannana1.velocityX = -15 - (score / 10);

  //lifetime
  bannana1.lifetime = (200);

  //add to bannana group
  bannana1Group.add(bannana1);

}