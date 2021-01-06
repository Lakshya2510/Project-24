
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
	
	paper = new Paper(100,620,40)
	dustbin1 = new Dustbin(1090,655,180,20)
	dustbin2 = new Dustbin(1000,615,20,80)
	dustbin3 = new Dustbin(1180,615,20,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
	
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:5, y:-19});
	 }
   }



