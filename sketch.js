var diam1=0

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("003366");
  fill("#add8e6");
  stroke("#fff00");
  strokeWeight(5);
  ellipse (50,100,diam1,diam1);
  
  fill("#ff0000")
  ellipse(mouseX,mouseY,20,20);
  textSize(20);
  textFont("GEORGIA");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("hello",40,40);
}

function mousePressed(){
  if(diam1>50){
     diam1=0;
  }else{ 
     diam1=diam1+5;
     }
}