const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=200;

var ground;







function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
  
for (var k = 0;k<=width;k=k+80){
    divisions.push(new division(k,450,10,150));
}

for(var j =20; j <=width; j=j+50)
{
    plinkos.push(new plinko(j,55));
}
  for(var j =20; j<=width-10;j=j+50)
{
  plinkos.push(new plinko(j,120));
}
for(var j =20; j<=width-10;j=j+50)
{
  plinkos.push(new plinko(j,190));
}
for(var j =20; j<=width-10;j=j+50)
{
  plinkos.push(new plinko(j,260));
}
for(var j =20; j<=width-10;j=j+50)
{
  plinkos.push(new plinko(j,330));
}


if(frameCount%60===0){
  particles.push(new particle(random(width/2-10,width/2+10),10,10))
}

  ground1=new Ground(500,500);




  Engine.run(engine);
}

function draw() {
  background("black");  

  //display
  
  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }
  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }

  //display

  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }

  //display
  for(var j=0; j<divisions.length; j++){
    divisions[j].display();
  }
  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }
  

  ground1.display();


  drawSprites();
}