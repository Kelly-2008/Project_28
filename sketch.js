
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var launchingForce = 100;

function preload(){

	boy=loadImage("images/boy.png");

}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1200,300,30);
  mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,70,30);
	mango6 = new Mango(1000,230,30);
	mango7 = new Mango(900,230,40);
	mango8 = new Mango(1000,300,40);
	mango9 = new Mango(1100,230,40);
	mango10 = new Mango(1200,200,40);

	tree = new Tree(1050,350,450,690);

	stone = new Stone(235,525,75,75); 

	ground = new Ground(650,690,1300,10);

	launcher = new Launcher(stone.body,{x:235,y:525});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("olive");

  textSize(25);
  fill("beige");
  stroke("black");
  strokeWeight(3);
  text("Click on SpaceBar to get another Chance to Play",50 ,50);

  image(boy ,200,450,200,300);

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();	
  mango9.display();	
  mango10.display();		

  stone.display();

  ground.display();

  launcher.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if (keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:235, y:420}); 
	  launcher.attach(stone.body);
	}
}

function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance <= lmango.r + lstone.r){
  	  Matter.Body.setStatic(lmango.body,false);
  }

}