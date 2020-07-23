const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbinImage ;
var rect1 ,rect2,rect3,ground,paperObject,string,wall;

function preLoad(){
	dustbinImage = loadImage("images/dustbin.jpg",dust);
}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paperObject = new Paper(300,100,40);
	wall = new Ground(250,200,50,20);
	rect1 = new Dustbin (1100,575,20,100);
	rect2 = new Dustbin(1300,575,20,100);
	rect3 = new Dustbin(1200,635,200,20);
	string = new Rope (wall.body,paperObject.body);
	//console.log(paperObject);
	ground = new Ground(width/2,650,width,10);
	

	Engine.run(engine);
	
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	paperObject.display();
	rect2.display();
	push();
	fill("brown");
	wall.display();
	pop();
	string.display();
	ground.display();
   
}

function mouseDragged(){
    
    Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    string.fly();
}

