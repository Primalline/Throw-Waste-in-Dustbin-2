
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImage, binImage;

function preload(){
    bgImage = loadImage("images/park.jpg");
    binImage = loadImage("images/bin.jpg");
}

function setup() {
	var canvas = createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50, 530, 20);

	ground = new Ground(300, 550, 600, 20);

    side1 = new Dustbin(500, 532, 90, 15); 
    side2 = new Dustbin(450, 495, 15, 90);
    side3 = new Dustbin(545, 495, 15, 90);


	Engine.run(engine);
 
}


function draw() {
	rectMode(CENTER);
	background(bgImage);
	Engine.update(engine);

	paper.display();

    side1.display();
    side2.display();
    side3.display();
	
	drawSprites();
 
}

function keyPressed(){
    if(keyDown(UP_ARROW)){
        Matter.Body.applyForce(paper.body, paper.body.position,{x:10, y:-20});
    }
}