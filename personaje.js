let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const DRAW = "./paths/Kirby_50px.json";
const pixelCanvasSize = 50; //128 dibujo anterior
const gridSize = canvas.width / pixelCanvasSize;
let grids = [];

// ctx.scale(1, 1)

class Grid {
  constructor(x, y, width, height, context) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.context = context;

    this.limit = {
      x: x + width,
      y: y + height,
    };

    this.render();
  }

  render() {
    let { context, x, y } = this;

    const grd = ctx.createLinearGradient(0, 200, 200, 0);
    grd.addColorStop(0, "yellow");
    grd.addColorStop(0.5, "purple");
    grd.addColorStop(1, "white");

    context.strokeStyle = grd;
    context.lineWidth = 1;
    context.strokeRect(x, y, this.width, this.height);
  }

  setColor(color) {
    this.context.fillStyle = color;
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.render();
  }
}

async function init() {
  // Se inicializa las rejillas
  for (let j = 0; j < pixelCanvasSize; j++) {
    grids[j] = [];
    for (let i = 0; i < pixelCanvasSize; i++) {
      grids[j][i] = new Grid(
        i * gridSize,
        j * gridSize,
        gridSize,
        gridSize,
        ctx
      );
    }
  }
  let path = await (await fetch(DRAW)).json();

  setColors(path);
}

function setColors(paths) {
  let colors = Object.keys(paths);

  colors.map((color) => {
    paths[color].map((pixel) => {
      if (pixel.from && pixel.to) {
        for (let i = pixel.from.y; i <= pixel.to.y; i++) {
          for (let j = pixel.from.x; j <= pixel.to.x; j++) {
            grids[i][j].setColor(color);
          }
        }
        return;
      }
      grids[pixel.y][pixel.x].setColor(color);
    });
  });
}

init();
