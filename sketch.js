const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,5);

    ground1 = new Ground(400,460,600,20);

    polygon = new Polygon(100,300,50,50)

    box1 = new Box(375,425,50,50);
    box2 = new Box(425,425,50,50);
    box3 = new Box(475,425,50,50);
    box4 = new Box(525,425,50,50);
    box5 = new Box(325,425,50,50);
    box6 = new Box(275,425,50,50);
    box7 = new Box(225,425,50,50);

    box8 = new Box(250,375,50,50);
    box9 = new Box(300,375,50,50);
    box10 = new Box(350,375,50,50);
    box11 = new Box(400,375,50,50);
    box12 = new Box(450,375,50,50);
    box13 = new Box(500,375,50,50);

   // box14 = new Box(275,325,50,50);
    box15 = new Box(325,325,50,50);
    box16 = new Box(375,325,50,50);
    box17 = new Box(425,325,50,50);
   // box18 = new Box(475,325,50,50);

    box19 = new Box(300,275,50,50);
    box20 = new Box(350,325,50,50);
    box21 = new Box(400,325,50,50);
    box22 = new Box(450,325,50,50);

    box23 = new Box(325,275,50,50);
    box24 = new Box(375,275,50,50);
    box25 = new Box(425,275,50,50);

    box26 = new Box(350,225,50,50);
    box27 = new Box(400,225,50,50);

    box28 = new Box(375,175,50,50);

/*
    ground2 = new Ground(650,260,200,20);

    box29 = new Box(525,250,50,50);
    box30 = new Box(575,250,50,50);
    box31 = new Box(625,250,50,50);
    box32 = new Box(675,250,50,50);
    box33 = new Box(725,250,50,50);

    box34 = new Box(550,200,50,50);
    box35 = new Box(600,200,50,50);
    box36 = new Box(650,200,50,50);
    box37 = new Box(700,200,50,50);

    box38 = new Box(575,150,50,50);
    box39 = new Box(625,150,50,50);
    box40 = new Box(675,150,50,50);

    box41 = new Box(600,100,50,50);
    box42 = new Box(650,100,50,50);

    box43 = new Box(625,50,50,50);
  */  
    Engine.run(engine);
    slingshot = new SlingShot(polygon.body,{x:100, y:300});
}
function draw(){
    background(0);

    ground1.display();
    //ground2.display();
fill("yellow")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("red")
    box8.display();
    box9.display();
    box10.display();

    box11.display();
    box12.display();
    box13.display();
    //box14.display();
    box15.display();
    box16.display();
    box17.display();
    //box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    /*
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();
    box43.display();
    */
    polygon.display();
    ground.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(polygon.body);
    }
}