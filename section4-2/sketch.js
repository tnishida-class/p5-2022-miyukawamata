//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls ;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [] ;
count = 0;
cycle = 30;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle ; 
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
    
    }
    const b = { x: windowWidth/2, y: windowHeight/2, size:random(100), vx: random(-5,5), vy:  random(-5,5)};
    balls.push(b);

}





function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size:random(100), vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
