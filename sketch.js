
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, paper, dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,675,width,20)
	
	paper = new Paper(100,500,40)
	dustbin1 = new Dustbin(900,645,180,20)
	dustbin2 = new Dustbin(820,570,20,170)
	dustbin3 = new Dustbin(980,570,20,170)

	Engine.run(engine);
  
}


function draw() {
  background(225);
  rectMode(CENTER);
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:225, y:-300});
	 }
   }

