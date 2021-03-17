class Ball{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius,{frictionAir:0.005,density:1});
        this.r=radius;
  World.add(world,this.body);
  this.image=loadImage("super.png")
    }
    display(){
        imageMode(CENTER)
        image(this.image ,this.body.position.x,this.body.position.y,200,150);}
}