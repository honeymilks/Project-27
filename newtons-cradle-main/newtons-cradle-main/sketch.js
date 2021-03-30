
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5, roof
var rope1, rope2, rope3, rope4, rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,150,500,50)

	ball1 = new Bob(400,350,35)
	ball2 = new Bob(470,350,35)
	ball3 = new Bob(540,350,35)
	ball4 = new Bob(330,350,35)
	ball5 = new Bob(260,350,35)
	
	rope1 = new Rope(ball1.body,{x: 400, y:150})
	rope2 = new Rope(ball2.body,{x: 470, y:150})
	rope3 = new Rope(ball3.body,{x: 540, y:150})
	rope4 = new Rope(ball4.body,{x: 330, y:150})
	rope5 = new Rope(ball5.body,{x: 260, y:150})


	Engine.run(engine);
  
}


function draw() {
  background(0);

  ball1.display();
  roof.display();
  rope1.display();
  ball2.display();
  rope2.display();
  ball3.display();
  rope3.display();
  ball4.display();
  rope4.display();
  ball5.display();
  rope5.display();

  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball5.body,{x: mouseX, y: mouseY})
}



