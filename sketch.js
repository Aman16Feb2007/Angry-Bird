const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var myengine, myworld;
var box1, box2, box3, newG;

function setup(){
    var canvas = createCanvas(400,400);
    myengine = Engine.create();
    myworld = myengine.world;

    newG = new Ground1(); 
    box1 = new Box(230, 100,50,100);
    console.log(box1)
    box2 = new Box(200,300,60,50);
    box3 = new Box(100,50,50,100)
    //console.log(ground);
}

function draw(){
    background("aquamarine");
    Engine.update(myengine);
    box1.display();
    box2.display();
    box3.display()
    newG.display();
}