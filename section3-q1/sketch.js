// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  if(count<50){size = 75 + (count+= 0.8);} 
  else {size =175-(count-= 0.01);} 
  if(keyIsDown("A".charCodeAt(0))){
    if(count<50){size = 75+(count+= 2);}                     
    else {size = 175-(count-= 0.1);} 
  }                                           
  fill(0,0,255);
  ellipse(width / 2, height / 2, size);
  }

