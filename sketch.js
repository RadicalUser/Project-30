const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var slingShot;
var polygon_img;








function setup() {
createCanvas(1200,600);

engine =Engine.create();
world =engine.world;

ground=new Ground(600,height,1200,20);

// Stands
stand1=new Ground(435,500,300,20);
stand2=new Ground(925,300,300,20);

// Blocks of Stand 1 
block1=new Box(440,460,50,60);
block2= new Box(350,460,50,60);
block3= new Box(320,460,50,60);
block4=new Box(470,460,50,60);
block5=new Box(500,460,50,60);
block6=new Box(530,460,50,60);
block20=new Box(360,400,50,60);
block21=new Box(410,400,50,60);
block22=new Box(460,400,50,60);
block23=new Box(510,400,50,60);
block24=new Box(410,340,50,60);
block25=new Box(460,340,50,60);
block26=new Box(435,280,50,60);
// Blocks of Stand 2  
block7=new Box(900,260,50,60);
block8=new Box(850,260,50,60);
block9=new Box(800,260,50,60);
block10=new Box(950,260,50,60);
block11=new Box(1000,260,50,60);
block12=new Box(1050,260,50,60);
block13=new Box(850,220,50,60);
block14=new Box(900,220,50,60);
block15=new Box(950,220,50,60);
block16=new Box(1000,220,50,60);
block17=new Box(900,180,50,60);
block18=new Box(950,180,50,60);
block19=new Box(925,130,50,60);

// polygon
polygon=new Polygon(1000,2000,50);

// Sling Shot 
slingShot=new Slignshot(polygon.body,{x:150,y:225})









  



}

function draw() {
  background("aquamarine"); 

  
  
  Engine.update(engine); 
  drawSprites();
  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
polygon.display();
slingShot.display();


}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  

if(keyCode === 32){
  slingShot.attach(polygon.body);
  
  
  }
}
