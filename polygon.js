class Polygon{
constructor(x,y,radius){
    var options={
        density:1.0
        
    }

    this.body=Bodies.circle(x,y,radius-25,options);
    this.radius=radius;
    this.image=loadImage("2da079debf883e276206bdb6c94f4c23-polygon-tool-by-vexels.png");

    World.add(world,this.body);
}
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    image(this.image,0,0,this.radius,this.radius);
    pop();


}







  
}