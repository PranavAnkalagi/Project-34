
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var pendulumObject1,pendulumObject2,pendulumObject3,pendulumObject4,pendulumObject5,roofObject;
var sling1,sling2,sling3,sling4,sling5;
var  Mouse;
function preload()
{
	
}

function setup() {
canvas=createCanvas(windowWidth/2,windowHeight/2,windowHeight/1.5);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio=pixelDensity();
  let options={
    mouse:canvasmouse
  };
  mConstraint=MouseConstraint.create(engine,options);
  world.add(world.mConstraint)
    bob1= new pendulum(100,100,100,100);
    roofObject=new roof(width/2,200,200,20);

    pendulumDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	pendulumObject1=new pendulum(startBobPositionX-pendulumDiameter*2,startBobPositionY,pendulumDiameter);
  pendulumObject2=new pendulum(startBobPositionX-pendulumDiameter,startBobPositionY,pendulumDiameter);
	pendulumObject3=new pendulum(startBobPositionX,startBobPositionY,pendulumDiameter);
  pendulumObject4=new pendulum(startBobPositionX+pendulumDiameter,startBobPositionY,pendulumDiameter);
  pendulumObject5=new pendulum(startBobPositionX+pendulumDiameter*2,startBobPositionY,pendulumDiameter);
  
  sling1=new sling(pendulumObject1.body,roofObject.body,-pendulumDiameter*2, 0)

  sling2=new sling(pendulumObject2.body,roofObject.body,-pendulumDiameter*1, 0)
  sling3=new sling(pendulumObject3.body,roofObject.body,0, 0)
	sling4=new sling(pendulumObject4.body,roofObject.body,pendulumDiameter*1, 0)
	sling5=new sling(pendulumObject5.body,roofObject.body,pendulumDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  pendulumObject1.display();
  pendulumObject2.display();
  pendulumObject3.display();
  pendulumObject4.display();
  pendulumObject5.display();
  
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  
  
  roofObject.display();

  drawSprites();
 
}

function mouseDragged() {
 

    Matter.Body.setPosition(pendulumObject1.body,{x:mouseX,y:mouseY});

 
}



