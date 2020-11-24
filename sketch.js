const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var backgroundimg;

function preload(){
    backgroundimg = loadImage("sprites//bg.png");
}

function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,50,50);
    box2 = new Box(920,320,50,50);
    box3 = new Box(700,240,50,50);
    box4 = new Box(920,240,50,50);
    ground = new Ground(200,350,1800,20)
    pig1 = new pig(810, 320, 50,50);
    pig2 = new pig(810,240,50,50);
    pig3 = new pig(810,150,50,50);
    log1 = new log(810,260,300,PI/2);
    log2 = new log(810,180,300,PI/2);
    log3 = new log(760,120,150, PI/7);
    log4 = new log(870,120,150,-PI/7);
    bird1 = new bird(100,100,50,50);

}

function draw(){
    background(backgroundimg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    pig3.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();

    
}