const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var roof,chain1,chain2,chain3,chain4,chain5;
var bob1,bob2,bob3,bob4,bob5;

function setup(){
	createCanvas(800,800)
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,450,30);

	bob1 = new Bob(400,600,80);
	bob2 = new Bob(480,600,80);
	bob3 = new Bob(560,600,80);
	bob4 = new Bob(320,600,80);
	bob5 = new Bob(240,600,80);

	chain1 = new Chain(bob1.body , {x:400,y:100});
	chain2 = new Chain(bob2.body , {x:480,y:100});
	chain3 = new Chain(bob3.body , {x:560,y:100});
	chain4 = new Chain(bob4.body , {x:320,y:100});
	chain5 = new Chain(bob5.body , {x:240,y:100});
}

function draw(){
	background (0)
	Engine.update(engine)

	//ROOF AND chain DISPLAY
	roof.display();
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();

	//BOB DISPLAY
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	//CHAIN DISPLAY
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
}

// function mouseDragged(){
// 	Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY} );
//  }
 
 function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(bob3.body,bob3.position, {x:80,y:0});
 	}
 }