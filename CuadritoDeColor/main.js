let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
// let onpress = false;

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
// ctx.fillStyle = `rgba(32, 33, 36, 0.25)`;

// canvas.addEventListener("click", ({ clientX, clientY }) => {

// });

// canvas.addEventListener('mouseover', function() {
//     this.random = () => Math.random() * 255;
//     ctx.fillStyle = `rgba(${this.random()}, ${this.random()}, ${this.random()}, 0.25)`;
// });

// canvas.addEventListener('mousemove', ({clientX, clientY}) => {
//   let aux = ctx.fillStyle;

//   if(onpress) {
//     ctx.beginPath();
//     ctx.fillStyle = `rgba(0, 0, 0, 1)`;
//     ctx.arc(clientX, clientY, 2, 0, 2 * Math.PI);
//     ctx.fill();

//     ctx.fillStyle = aux;
//   }
// })

// canvas.addEventListener('mousedown', ({clientX, clientY}) => {
//   onpress = true;
//   ctx.beginPath();
//   if(figura) {
//     ctx.arc(clientX, clientY, 50, 0, 2 * Math.PI);
//   } else {
//     ctx.fillRect(clientX - 50, clientY - 50, 100, 100);
//     ctx.strokeRect(clientX - 50, clientY - 50, 100, 100);
//   }

//   ctx.fill();
//   ctx.stroke();
// })

// canvas.addEventListener('mouseup', () => onpress = false)

// let figura = false;
// canvas.addEventListener('mouseout', () => figura = !figura);
const keys = { x: { a: -10, d: 10 }, y: { w: -10, s: 10 } };
const figure = { width: 100, height: 100 };

window.requestAnimationFrame(() => {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (e) {
      console.log(e);
    }
  );
});

let coord = {
  x: Math.floor(canvas.width / 2 - figure.width / 2),
  y: Math.floor(canvas.height / 2 - figure.height / 2),
};

let lastKey = "_";

canvas.focus();
canvas.addEventListener("keydown", (e) => {
  lastKey = e.key;
});

function upadte(loop) {
  const { floor, min, max } = Math;

  this.random = (limit) => floor(Math.random() * limit);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  coord.x = min(
    max(coord.x + (keys.x[lastKey.toLowerCase()] ?? 0), 0),
    canvas.width - figure.width
  );
  coord.y = min(
    max(coord.y + (keys.y[lastKey.toLowerCase()] ?? 0), 0),
    canvas.height - figure.height
  );
  ctx.fillStyle = `
    rgba(${this.random(255)}, ${this.random(255)}, ${this.random(255)}, 0.65)
  `;

  ctx.fillRect(coord.x, coord.y, figure.width, figure.height);
  ctx.strokeRect(coord.x, coord.y, figure.width, figure.height);

  requestAnimationFrame(upadte);
}

window.requestAnimationFrame(upadte);
