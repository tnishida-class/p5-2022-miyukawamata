// 最終課題を制作しよう
let z,w;
let x,y;

function setup(){
  createCanvas(400, 400);
  background(150,140,230)
  backcircle();
  
  }

function draw(){

  
  fill(120,140,230)
  ellipse(z,w,250)
  
  fill(230,230,255);
  ellipse(x,y,200);


    fill(30,30,200);
  ellipse(200,156,50);
  fill(150,20,230);
  ellipse(243,191,50);
  fill(190,240,240);
  ellipse(226,242,50);
  fill(150,180,250);
  ellipse(173,242,50);
  fill(150,220,200);
  ellipse(156,191,50);
  fill(255)
  ellipse(200,200,60)



}
    

function backcircle(){
  for(let j = 0; j<10; j++){
    if(j%2==0){
      stroke(150,100,250);
      ellipse(200,200,400-j*10); 
    }
    else
    stroke(50,50,90);
    ellipse(200,200,400-j*10) ; 
    }
  
}

function doubleClicked(){
  z = 200
  w = 200
}

function mouseClicked(){
  x = 200;
  y = 200;

}
  
  
  








function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

