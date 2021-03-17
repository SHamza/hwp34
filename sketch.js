const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var superimg,backgroundimg,monsterimg;
var box1,box2,box3,box4,box5,box6,monster;



function preload() {
//preload the images here
superimg = loadImage("super.png");
monsterimg = loadImage("monst.png")
backgroundimg = loadImage("bg.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground();
  
  box1 = new Box(650,100,70,70)

  box4 = new Box(650,360,70,70);
  box5 = new Box(650,280,70,70);
  box6 = new Box(650,200,70,70);
  monster = new Monster(790,300,70,70);
  
  ball = new Ball(200,200,80)
  slingShot = new Rope(ball.body,{x:500,y:50});
  Engine.run(engine);
}

function draw() {
  background(backgroundimg);

  ground.display();

  box1.display();
  box4.display();
  box5.display();
  box6.display();

  monster.display();
  ball.display();
//  imageMode(CENTER)
  //image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}





