const Engine = Matter.Engine;
const Bodies =  Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world = engine.world;

box1 = new Box(300,350)
 
var op = {
  static:true
}
ground=Bodies.rectangle(400,390,800,20,op)
World.add(world, ground)
}

function draw() {
  background("lightblue");  

  Engine.update(engine);
  box1.display()

  rectMode(CENTER)
  Matter.Body.setStatic(ground, true)
  rect(ground.position.x,ground.position.y, 800,20)
}