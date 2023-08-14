let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#7d88e5";
ctx.fillRect(0,0, 100, 100);
ctx.fillStyle = "#cd0009";
ctx.fillRect(80,80, 100, 100);
ctx.fillStyle = "rgba(125, 136, 229, 0.65)";
ctx.fillRect(160, 160, 100, 100);


// Ejercicio 3
ctx.beginPath();
ctx.moveTo(400,300);
ctx.lineTo(450, 400);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(300, 450);
ctx.lineTo(450, 450);
ctx.lineTo(350, 350);
ctx.fill();