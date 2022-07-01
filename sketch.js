
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObj,leftSide,rightSide;

let engine;
let world;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1100,600,20,120);

	rectMode(CENTER);
	ellipseMode(RADIUS);

	//Create the Bodies Here
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density:1.2
	}
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20);
  background(51);
  ground.show();
  
  drawSprites();
  Engine.update(engine);
 
}



