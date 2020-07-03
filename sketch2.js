const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball,chain,roof;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   
    
    ball=Bodies.circle(200,200,30,{density:0.3});
    World.add(world,ball);
    console.log(ball);
    roof=Bodies.rectangle(200,50,200,20,{isStatic:true});
    World.add(world,roof);
    //var b={x:100,y:150};
    var options={
        bodyA:ball,
        bodyB:roof
    }
  
     chain=Constraint.create(options);
    
    World.add(world,chain);
   
}
function draw(){
    background("yellow");
    fill("black");
    rectMode(CENTER);
    rect(roof.position.x,roof.position.y,200,20);
    fill("red");
    
    Engine.update(engine);
    ellipseMode(RADIUS);
    //line(chain.bodyA.position.x - 50,chain.bodyA.position.y - 10,chain.bodyB.position.x,chain.bodyB.position.y);
    ellipse(ball.position.x,ball.position.y,30,30);
   
    line(chain.bodyA.position.x ,chain.bodyA.position.y - 30,chain.bodyB.position.x,chain.bodyB.position.y + 10);
}


function keyPressed(){
    if(keyCode === 32)
    {
        console.log(ball.position);
        Matter.Body.applyForce(ball,ball.position,{x:30,y:-30});
    }
}