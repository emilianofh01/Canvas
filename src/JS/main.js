let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

/*ctx.fillStyle = "#7d88e5";
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


// Act 4 
ctx.beginPath();
ctx.arc(400, 75, 50, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.arc(280, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// Act 6 
ctx.font = "50px sans-serif";
ctx.fillStyle = "red"
ctx.fillText("JELOUU", 0 , 300);
ctx.strokeText("JELOUU", 0 , 350);

// Act 7
const gradient = ctx.createLinearGradient(0, 500, 500, 500);

gradient.addColorStop(0, "green");
gradient.addColorStop(0.5,"cyan");
gradient.addColorStop(1,"green");

ctx.fillStyle = gradient;
ctx.fillRect(0, 500, 500,500);

// Act 8
const gradient2 = ctx.createRadialGradient(610, 610 ,30, 610, 610, 80);

gradient2.addColorStop(0, "yellow");
gradient2.addColorStop(0.5, "blue");
gradient2.addColorStop(1, "green");

ctx.fillStyle = gradient2;
ctx.fillRect(530, 530, 160, 160);

// Act 9
const img = document.getElementById("img1");

window.onload = () => {
    ctx.drawImage(img, 550,250, 300,250);
} */

canvas.addEventListener("click", ({clientX, clientY}) => {
    ctx.beginPath();
  ctx.arc(clientX, clientY, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = `rgba(32, 33, 36, 0.25)`;
  ctx.fill();
});
