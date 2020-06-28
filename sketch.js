var n = 5;
console.log(n);
var name = "Kalyananand"
console.log(name);
console.log(name.length);
console.log(name.toUpperCase());
console.log(parseInt("ad123"));
console.log(5*5+5);
console.log(n%2===0);
console.log(n%2);
console.log(1/0);
console.log('name'+'n');
console.log('name'*'n');
console.log(name.length>10);
var a;
console.log(a);
a = null;
console.log(a);
var arr = [123,"wfd"]
console.log(arr);
function setup() {
  createCanvas(1000,1000);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(200,234,10); 
  number();
  drawSprites();
}

function number(){
  textSize(18);
  for(var i = 0;i<30;i++){
    if(i%2===0){
      text(i,200,i*50);
    }
    else{
      text(i,100,i*50);
    }
  }

}
