var angle=0.0

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(194, 217, 255);
  //let interaction=dist(0,0,mouseX,mouseY);
  
  translate(355,250);
  rotate(angle);
  ellipseMode(RADIUS)
    
  stroke(255);
  strokeWeight(15);
  ellipseMode(RADIUS)
  noFill();
  ellipse(0,0, 180,180);
  
  
 //var circcarts=
  
  push();

  //Ferrish wheel
  //Yellow Carts
  let cartSize=45
  let wheelSize=180
  
  fill(250, 220, 87);
  ellipse(0,-wheelSize,cartSize); //top cart
  ellipse(175,0,cartSize); //right mid cart
  ellipse(-175,0,cartSize); //mid left cart
  ellipse(0,wheelSize,cartSize); //bottom cart
  
  //Red carts
  
  fill(224, 58, 2);
  ellipse(120,-110,cartSize); //upper right cart
  ellipse(113,113,cartSize); //lower right cart
  ellipse(-113,113,cartSize); //lower left cart
  ellipse(-120,-116,cartSize); //upper left cart

  let d=dist(mouseX,mouseY,350,250)

  
  if(d<175) {
    angle+=0.009

      
    } else {
     dist (mouseX,mouseY, 350,250)
     angle+=0.00
  
  }
  
  pop();     
  
  print(dist);
}