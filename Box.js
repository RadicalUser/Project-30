class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 50, 60, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("unnamed.png");
    this.visiblity=255;
    
    World.add(world, this.body);
  }
  display(){
    
     var pos =this.body.position;
    var angle = this.body.angle;
   // console.log(this.body.speed);
   if(this.body.speed<5){
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    image(this.image,0, 0, this.width, this.height);
    pop();
   }else{
     World.remove(world,this.body);
     push();
     this.visiblity=this.visiblity - 10;
     tint(255,this.visiblity);
     image(this.image,this.body.position.x,this.body.position.y,50,50);
     pop();
   }
    
      }
    
      

    
    }
