
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engineV,worldV;

var ground,ball;
function setup() {
  createCanvas(400,400);
  engineV = Engine.create();
  worldV = engineV.world;

  var ground_options = {
    isStatic :true
  }

//Step 1 -- creating the physical body
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(worldV,ground);
  var ball_options = {
  restitution:1.0
}
  ball=Bodies.circle(200,100,20,ball_options)
  World.add(worldV,ball)
}

function draw() {
  background("pink");  
  Engine.update(engineV);
  //drawSprites();
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20)
}