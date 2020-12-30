
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, paper, dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,650,800,50)
	
	paper = new Paper(200,640,50)
	dustbin1 = new Dustbin(550,600,130,20)
	dustbin2 = new Dustbin(520,600,20,80)
	dustbin3 = new Dustbin(580,600,20,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper,paper.position,{x:85, y:-85})
	 }
   }

