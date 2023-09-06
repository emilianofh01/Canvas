let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

class Rectangulo {
  constructor(x, y, width, height, context, playable = false) {
    this.width = width;
    this.height = height;
    this.ctx = context;
    this.playable = playable;

    this.coord = {
      x: x,
      y: y,
    };
    this.paint();
  }

  random(limit) {
    return Math.floor(Math.random() * limit);
  }

  paint() {
    this.ctx.fillStyle = this.playable
      ? `
    rgba(${this.random(254)}, ${this.random(254)}, ${this.random(254)}, 0.65)
  `
      : "#000";

    this.ctx.fillRect(this.coord.x, this.coord.y, this.width, this.height);
    this.ctx.strokeRect(this.coord.x, this.coord.y, this.width, this.height);
  }
  seTocan(target, callback) {
    let { x, y } = this.coord;
    let { x: targetX, y: targetY } = target.coord;

    return (
      x <= targetX + target.width &&
      x + this.width >= targetX &&
      y <= targetY + target.height &&
      y + this.height >= targetY
    );
  }
}

const keys = { x: { a: -10, d: 10 }, y: { w: -10, s: 10 } };
const figure = { width: 50, height: 50 };
let lastKey = "_";
let score = 0;
let pause = false;


let player = new Rectangulo(
  Math.floor(canvas.width / 2 - figure.width / 2),
  Math.floor(canvas.height / 2 - figure.height / 2),
  figure.width,
  figure.height,
  ctx,
  true
);
let other = new Rectangulo(400, 400, 50, 50, ctx);
let muro = [
  new Rectangulo(180, 140, 400, 50, ctx),
  new Rectangulo(180, 450, 400, 50, ctx),
];
ctx.font = "35px serif";


canvas.focus();
canvas.addEventListener("keydown", (e) => {
  lastKey = e.key;
  if(pause && lastKey == "p") {
    pause = false;
    window.requestAnimationFrame(update)
    return;
  }
  pause = lastKey == "p" ? true : pause;
});

async function update(loop) {
  const { floor, min, max } = Math;

  this.random = (limit) => floor(Math.random() * limit);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(`Score: ${score}`, 20, 40);
  player.paint();
  other.paint();


  let bloqueado = false; // Flag para identificar si el jugador colisiona con un muro
  for (let i = 0; i < muro.length; i++) {
    muro[i].paint();
    if (lastKey != "_") {
      bloqueado = player.seTocan(muro[i]) ? true : bloqueado;
    }
  }

  if (player.seTocan(other)) {
    let colisiona = false;
    score+=10;
    do {
      other.coord.x = this.random(500 - other.width);
      other.coord.y = this.random(500 - other.height);
      colisiona = false;

      for (let i = 0; i < muro.length; i++) {
        if(other.seTocan(muro[i])) {
          colisiona = true;
          break;
        }
      }
    } while (colisiona);
  }

  player.coord.x = min(
    max(
      player.coord.x + (bloqueado ? -1 : 1) * (keys.x[lastKey.toLowerCase()] ?? 0), 0),
      canvas.width - figure.width
  );
  player.coord.y = min(
    max(
      player.coord.y + (bloqueado ? -1 : 1) * (keys.y[lastKey.toLowerCase()] ?? 0), 0),
      canvas.height - figure.height
  );
  lastKey = bloqueado ? "_" : lastKey;

  if(!pause) {
    requestAnimationFrame(update);
    return;
  }
  ctx.fillStyle = "rgba(0,0,0,.55)";
  ctx.fillRect(0,0, canvas.width, canvas.height, 2);

  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillText("Pausa", canvas.width/2, canvas.height/2)
}

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

window.requestAnimationFrame(update);
