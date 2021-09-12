//Engine(physics), World(canvas), Bodies(objects)
//Matter.js - library
//Full Name
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

//Matter.Engine.create() --> Engine.create()

var engine
var world
var ground;
var ball

function setup() {
  createCanvas(400,400);
  
  //to create the physics Engine --> Engine.create()
  engine = Engine.create()

  //to create a world for the engine --> engine.world()
  world = engine.world 

  var groundOptions = {
    isStatic: true
  }

  //to create the object --> Bodies.rectangle(x,y,w,h)/ Bodies.circle(x,y,r)
  ground = Bodies.rectangle(200,380,400,20,groundOptions)

  //add the object(ground) to the world --> World.add(world,obejctName)
  World.add(world,ground);
  var ballOptions = {
    restitution: .9
  }

  //create the ball object
  ball = Bodies.circle(200,100,25, ballOptions)
  
  //add the ball to the world
  World.add(world,ball)
}

function draw() {
  background(0);  
 
  //update the physics engine
  Engine.update(engine);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  ellipse(ball.position.x, ball.position.y,50,50)
  drawSprites();
}