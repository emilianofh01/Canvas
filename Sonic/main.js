const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");
const palmeraImg = new Image();
palmeraImg.src = "./palmera.png";

let calzon = new Image();
calzon.src = "./calzon.png";

ctx.scale(2, 2);

ctx.fillStyle = "#2000a0";
ctx.fillRect(0, 0, canvas.width, canvas.height);

palmeraImg.onload = () => {
  ctx.fillStyle = "#804000";
  ctx.fillRect(285, 150, 8, 90);
  ctx.drawImage(palmeraImg, 200, 30, 180, 142);
  ctx.drawImage(palmeraImg, -100, 30, 180, 142);

};

  for (let fila = 1; fila <= 5; fila++) {
    for (let columna = 0; columna < 22; columna++) {
      ctx.fillStyle = (fila % 2 ? columna % 2 : !(columna % 2))
        ? "#602000"
        : "#c06000";
      ctx.fillRect(columna * 20, 230 + fila * 20, 20, 20);
    }
  }

  ctx.strokeStyle = "yellow";
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.arc(40, 210, 15, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.arc(90, 210, 15, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.arc(140, 210, 15, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = "#80e000";
  ctx.fillRect(0, 240, canvas.width, 10);
  ctx.fillStyle = "#40a000";
  ctx.fillRect(0, 250, canvas.width, 10);
  ctx.fillStyle = "#006000";
  ctx.fillRect(0, 260, canvas.width, 10);
  ctx.fillStyle = "rgba(0,0,0,0.50)";
  ctx.fillRect(0, 270, canvas.width, 10);

  ctx.fillStyle = "#40a000";
  ctx.fillRect(385,205, 5, 35);
  calzon.onload = () => {
      ctx.drawImage(calzon, 370, 180, 35,35);
  };
