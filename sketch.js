
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
let engine;
let world;

var ball;
var ground;
var right;
var left;

function setup() 
{
 createCanvas(800, 800);

 engine = Engine.create();
 world = engine.world;

 var ground_options = {isStatic : true};
 ground = Bodies.rectangle(400,790,800,20,ground_options);
 World.add(world,ground);

 var left_options = {isStatic : true};
 left = Bodies.rectangle(570,720,20,120,left_options);
 World.add(world,left);

 var right_options = {isStatic : true};
 right = Bodies.rectangle(700,720,20,120,right_options);
 World.add(world,right);

 var ball_options = {isStatic : false , restitution : .1 , friction : 0, density :1.2};
 ball = Bodies.circle(50,10,20,ball_options);
 World.add(world,ball);

 rectMode(CENTER);
 ellipseMode(RADIUS);
}


function draw() 
{
 background(0);

 keyPressed();

 Engine.update(engine);
 fill("white")
 ellipse(ball.position.x,ball.position.y,15);
 fill("yellow")
 rect(ground.position.x,ground.position.y,800,15)
 rect(left.position.x,left.position.y,20,120)
 rect(right.position.x,right.position.y,20,120)
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:.5,y:-1.2})
	}
	/*if(keyCode === LEFT_ARROW)
	{
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:-.5,y:0})
	}
	if(keyCode === RIGHT_ARROW)
	{
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:.5,y:0})
	}
	if(keyCode === DOWN_ARROW)
	{
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:.5})
	}*/
}

