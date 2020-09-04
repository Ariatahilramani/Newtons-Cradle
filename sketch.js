
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var engine, world;

function setup() {
  createCanvas(800, 700);
  
  


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

roof=new Ground(400,200,200,20)
bob1 = new Bob(320,400,20);
bob2 = new Bob(360,400,20);
bob3 = new Bob(400,400,20);
bob4 = new Bob(440,400,20);
bob5 = new Bob(480,400,20);

rope1=new Rope(bob1.ball,roof.body,-90,0)
rope2=new Rope(bob2.ball,roof.body,-50,0)
rope3=new Rope(bob3.ball,roof.body,-10,0)
rope4=new Rope(bob4.ball,roof.body,30,0)
rope5=new Rope(bob5.ball,roof.body,70,0)
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);

  background("white");
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 rope1.display();
 rope2.display();
  rope3.display();
 rope4.display();
  rope5.display();

 
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		
		Matter.Body.applyForce(bob1.ball,bob1.ball.position,{x:-40,y:0});
	}
}


