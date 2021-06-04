
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var block1;
var block2;
var rotator1;
var rotator2;
var rotator3;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;

var angle1=0;
var angle2=60;
var angle3=100;
var poly;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground_options = {
		isStatic: true
	}

	ball_options = {
		restitution: 0.95,
		friction: 0.02
	}

	ground=Bodies.rectangle(400, 705, 1000, 10, ground_options);
	World.add(world, ground);

	block1=Bodies.rectangle(160, 450, 150, 20, ground_options);
	World.add(world, block1);
	
	block2=Bodies.rectangle(620, 450, 125, 20, ground_options);
	World.add(world, block2);

	rotator1=Bodies.rectangle(400, 240, 200, 20, ground_options);
	World.add(world, rotator1);
	
	rotator2=Bodies.rectangle(400, 240, 200, 20, ground_options);
	World.add(world, rotator2);
	
	rotator3=Bodies.rectangle(400, 240, 200, 20, ground_options);
	World.add(world, rotator3);

	ball1=Bodies.circle(random(300, 460), 30, 15, ball_options);
	World.add(world, ball1);
	
	ball2=Bodies.circle(random(300, 460), 30, 15, ball_options);
	World.add(world, ball2);
	
	ball3=Bodies.circle(random(300, 460), 30, 15, ball_options);
	World.add(world, ball3);
	
	ball4=Bodies.circle(random(300, 460), 30, 15, ball_options);
	World.add(world, ball4);
	
	ball5=Bodies.circle(random(300, 460), 30, 15, ball_options);
	World.add(world, ball5);

	Engine.run(engine);
    
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
   background("black");
	
   Engine.update(engine);

   Matter.Body.rotate(rotator1, angle1);
   push();
   translate(rotator1.position.x, rotator1.position.y);
   rotate(angle1);
   rect(0, 0, 200, 20);
   pop();
   angle1 +=3;

   Matter.Body.rotate(rotator2, angle2);
   push();
   translate(rotator2.position.x, rotator2.position.y);
   rotate(angle2);
   rect(0, 0, 200, 20);
   pop();
   angle2 +=5;

   Matter.Body.rotate(rotator3, angle1);
   push();
   translate(rotator3.position.x, rotator3.position.y);
   rotate(angle3);
   rect(0, 0, 200, 20);
   pop();
   angle3 +=8;

   rect(ground.position.x, ground.position.y, 1000, 10);
   rect(block1.position.x, block1.position.y, 150, 20);
   rect(block2.position.x, block2.position.y, 150, 20);

   ellipse(ball1.position.x, ball1.position.y, 15);
   ellipse(ball2.position.x, ball2.position.y, 15);
   ellipse(ball3.position.x, ball3.position.y, 15);
   ellipse(ball4.position.x, ball4.position.y, 15);
   ellipse(ball5.position.x, ball5.position.y, 15);

   drawSprites();
}



