// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 50, 50, 0, 100, 0);
}

function balloon(t,x,y,cr,cg,cb){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  noStroke();
  fill(cr,cg,cb);
  rect(x, y, w + p * 2, h + p * 2);
  fill(255);
  text(t, p+x, h + p+y);
  fill(cr,cg,cb)
  triangle(x+40, h+p*2+y, x+30, h+30+y, x+60, h+p*2+y);
}
