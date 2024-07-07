/*var canvas = document.getElementById('canvasSpace');
var ctx = canvas.getContext("2d")
ctx.fillText("helloworld",10,150);*/

let canvas =document.createElement("canvas")
let context = canvas.getContext("2d")
canvas.height= 400
canvas.width = 600
mainImage = new Image();
mainImage.ready =false;
mainImage.onload = checkReady;
mainImage.src = "pac.png"

function checkReady(){
    this.ready = true;
    playgame();
}

function playgame(){
    render();
}

function render(){
    context.fillStyle = "black";
    context.fillRect(0,0,canvas.width,canvas.height)
}


document.body.appendChild(canvas);
context.fillText("helloworld",10,150)