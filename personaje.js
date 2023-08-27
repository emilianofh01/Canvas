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

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const pixelCanvasSize = 50; //128 dibujo anterior
const gridSize = canvas.width / pixelCanvasSize;
let grids = [];

// Se inicializa las rejillas
for (let j = 0; j < pixelCanvasSize; j++) {
  grids[j] = [];
  for (let i = 0; i < pixelCanvasSize; i++) {
    grids[j][i] = new Grid(i * gridSize, j * gridSize, gridSize, gridSize, ctx);
  }
}

function setColors(paths) {
  let colors = Object.keys(paths);

  colors.map((color) => {
    path[color].map((pixel) => {
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

// Un dibujo que hare despues
// let path = {
//   "#130854": [{ from: { x: 0, y: 0 }, to: { x: 127, y: 31 } }],
//   "#170c63": [{ from: { x: 0, y: 32 }, to: { x: 127, y: 50 } }],
//   "#0c0c6b": [{ from: { x: 0, y: 51 }, to: { x: 127, y: 72 } }],
//   "#0f0f7d": [{ from: { x: 0, y: 73 }, to: { x: 127, y: 89 } }],
//   "#111185": [{ from: { x: 0, y: 90 }, to: { x: 127, y: 100 } }],
//   "#0818a8": [{ from: { x: 0, y: 101 }, to: { x: 127, y: 107 } }],
//   "#2031c7": [{ from: { x: 0, y: 108 }, to: { x: 127, y: 127 } }],
//   "#d98da4": [
//     { from: { x: 44, y: 40 }, to: { x: 73, y: 82 } },
//     { from: { x: 50, y: 37 }, to: { x: 67, y: 39 } },
//   ],
// };

let path = {
  "#fba6bb": [],
  "#2c2b2c": [
    { from: { x: 20, y: 0 }, to: { x: 28, y: 0 } },
    { from: { x: 18, y: 1 }, to: { x: 19, y: 1 } },
    { from: { x: 15, y: 2 }, to: { x: 17, y: 2 } },
    { from: { x: 15, y: 2 }, to: { x: 17, y: 2 } },
    { from: { x: 15, y: 2 }, to: { x: 17, y: 2 } },
    { from: { x: 12, y: 4 }, to: { x: 13, y: 4 } },
    { from: { x: 7, y: 9 }, to: { x: 7, y: 10 } },
    { from: { x: 5, y: 12 }, to: { x: 5, y: 13 } },
    { from: { x: 6, y: 14 }, to: { x: 7, y: 14 } },
    { from: { x: 8, y: 13 }, to: { x: 9, y: 13 } },
    { from: { x: 4, y: 15 }, to: { x: 5, y: 15 } },
    { from: { x: 3, y: 16 }, to: { x: 3, y: 17 } },
    { from: { x: 0, y: 20 }, to: { x: 0, y: 24 } },
    { from: { x: 4, y: 28 }, to: { x: 11, y: 28 } },
    { from: { x: 12, y: 27 }, to: { x: 14, y: 27 } },
    { from: { x: 11, y: 34 }, to: { x: 12, y: 34 } },
    { from: { x: 13, y: 36 }, to: { x: 13, y: 37 } },
    { from: { x: 14, y: 38 }, to: { x: 14, y: 39 } },
    { from: { x: 16, y: 41 }, to: { x: 17, y: 41 } },
    { from: { x: 18, y: 42 }, to: { x: 23, y: 42 } },
    { from: { x: 24, y: 41 }, to: { x: 25, y: 41 } },
    { from: { x: 26, y: 40 }, to: { x: 27, y: 40 } },
    { from: { x: 29, y: 38 }, to: { x: 32, y: 38 } },
    { from: { x: 33, y: 37 }, to: { x: 34, y: 37 } },
    { from: { x: 35, y: 36 }, to: { x: 36, y: 36 } },
    { from: { x: 37, y: 35 }, to: { x: 38, y: 35 } },
    { from: { x: 39, y: 34 }, to: { x: 40, y: 34 } },
    { from: { x: 42, y: 31 }, to: { x: 42, y: 32 } },
    { from: { x: 45, y: 27 }, to: { x: 45, y: 28 } },
    { from: { x: 46, y: 24 }, to: { x: 46, y: 26 } },
    { from: { x: 47, y: 17 }, to: { x: 47, y: 23 } },
    { from: { x: 46, y: 15 }, to: { x: 46, y: 16 } },
    { from: { x: 45, y: 13 }, to: { x: 45, y: 14 } },
    { from: { x: 44, y: 11 }, to: { x: 44, y: 12 } },
    { from: { x: 43, y: 9 }, to: { x: 43, y: 10 } },
    { from: { x: 39, y: 4 }, to: { x: 39, y: 5 } },
    { from: { x: 35, y: 3 }, to: { x: 37, y: 3 } },
    { from: { x: 33, y: 2 }, to: { x: 34, y: 2 } },
    { from: { x: 29, y: 1 }, to: { x: 32, y: 1 } },
    { from: { x: 40, y: 3 }, to: { x: 45, y: 3 } },
    { from: { x: 49, y: 7 }, to: { x: 49, y: 11 } },
    { from: { x: 48, y: 12 }, to: { x: 48, y: 13 } },
    { from: { x: 19, y: 43 }, to: { x: 19, y: 44 } },
    { from: { x: 20, y: 45 }, to: { x: 20, y: 46 } },
    { from: { x: 21, y: 47 }, to: { x: 21, y: 48 } },
    { from: { x: 22, y: 49 }, to: { x: 27, y: 49 } },
    { from: { x: 28, y: 48 }, to: { x: 29, y: 48 } },
    { from: { x: 32, y: 45 }, to: { x: 33, y: 45 } },
    { from: { x: 36, y: 41 }, to: { x: 36, y: 42 } },
    { from: { x: 38, y: 38 }, to: { x: 38, y: 39 } },
    { from: { x: 39, y: 36 }, to: { x: 39, y: 37 } },
    { from: { x: 13, y: 31 }, to: { x: 13, y: 33 } },
    { from: { x: 14, y: 29 }, to: { x: 14, y: 30 } },
    { from: { x: 19, y: 24 }, to: { x: 20, y: 24 } },
    { from: { x: 21, y: 23 }, to: { x: 22, y: 23 } },
    { from: { x: 23, y: 22 }, to: { x: 25, y: 22 } },
    { from: { x: 26, y: 21 }, to: { x: 30, y: 21 } },
    { from: { x: 31, y: 22 }, to: { x: 33, y: 22 } },
    { from: { x: 35, y: 24 }, to: { x: 35, y: 26 } },
    { from: { x: 34, y: 27 }, to: { x: 34, y: 31 } },
    { from: { x: 33, y: 32 }, to: { x: 33, y: 33 } },
    { from: { x: 32, y: 34 }, to: { x: 32, y: 35 } },
    // { from: { x: 25, y: 26 }, to: { x: 26, y: 26 } },
    { from: { x: 28, y: 8 }, to: { x: 28, y: 9 } },
    { from: { x: 28, y: 10 }, to: { x: 29, y: 13 } },
    { from: { x: 25, y: 12 }, to: { x: 27, y: 13 } },
    { from: { x: 26, y: 15 }, to: { x: 26, y: 16 } },
    { from: { x: 27, y: 17 }, to: { x: 29, y: 17 } },
    { from: { x: 30, y: 14 }, to: { x: 30, y: 16 } },
    { from: { x: 27, y: 14 }, to: { x: 28, y: 14 } },
    { from: { x: 24, y: 10 }, to: { x: 25, y: 11 } },
    { from: { x: 24, y: 7 }, to: { x: 24, y: 9 } },
    { from: { x: 25, y: 6 }, to: { x: 26, y: 6 } },
    { from: { x: 33, y: 6 }, to: { x: 35, y: 6 } },
    { from: { x: 33, y: 7 }, to: { x: 33, y: 10 } },
    { from: { x: 34, y: 9 }, to: { x: 34, y: 13 } },
    { from: { x: 35, y: 11 }, to: { x: 38, y: 12 } },
    { from: { x: 36, y: 13 }, to: { x: 38, y: 13 } },
    { from: { x: 35, y: 14 }, to: { x: 35, y: 15 } },
    { from: { x: 38, y: 14 }, to: { x: 38, y: 15 } },
    { from: { x: 36, y: 16 }, to: { x: 37, y: 16 } },
    { from: { x: 31, y: 18 }, to: { x: 35, y: 18 } },
    { from: { x: 32, y: 19 }, to: { x: 33, y: 19 } },
    { from: { x: 37, y: 9 }, to: { x: 37, y: 10 } },
    { from: { x: 36, y: 7 }, to: { x: 36, y: 8 } },

    { x: 14, y: 3 },
    { x: 11, y: 5 },
    { x: 10, y: 6 },
    { x: 9, y: 7 },
    { x: 8, y: 8 },
    { x: 6, y: 11 },
    { x: 2, y: 18 },
    { x: 1, y: 19 },
    { x: 14, y: 26 },
    { x: 2, y: 26 },
    { x: 1, y: 25 },
    { x: 6, y: 29 },
    { x: 3, y: 27 },
    { x: 7, y: 30 },
    { x: 8, y: 31 },
    { x: 9, y: 32 },
    { x: 10, y: 33 },
    { x: 12, y: 35 },
    { x: 15, y: 40 },
    { x: 28, y: 39 },
    { x: 41, y: 33 },
    { x: 43, y: 30 },
    { x: 44, y: 29 },
    { x: 42, y: 8 },
    { x: 41, y: 7 },
    { x: 40, y: 6 },
    { x: 38, y: 4 },
    { x: 46, y: 4 },
    { x: 47, y: 5 },
    { x: 48, y: 6 },
    { x: 47, y: 14 },
    { x: 30, y: 47 },
    { x: 31, y: 46 },
    { x: 34, y: 44 },
    { x: 35, y: 43 },
    { x: 37, y: 40 },
    { x: 40, y: 35 },
    { x: 15, y: 28 },
    { x: 16, y: 27 },
    { x: 17, y: 26 },
    { x: 18, y: 25 },
    { x: 34, y: 23 },
    { x: 31, y: 36 },
    { x: 30, y: 37 },
    { x: 27, y: 7 },
    { x: 25, y: 14 },
    { x: 35, y: 17 },
  ],
  "#044580": [
    { from: { x: 27, y: 15 }, to: { x: 29, y: 15 } },
    { from: { x: 36, y: 14 }, to: { x: 37, y: 14 } },

    { x: 26, y: 14 },
    { x: 29, y: 14 },
    { x: 35, y: 13 },
  ],
  "#0478bb": [
    { from: { x: 27, y: 16 }, to: { x: 29, y: 16 } },
    { from: { x: 36, y: 15 }, to: { x: 37, y: 15 } },
  ],
  "#f46e7c": [
    { from: { x: 19, y: 16 }, to: { x: 24, y: 18 } },
    { from: { x: 20, y: 19 }, to: { x: 23, y: 19 } },
    { from: { x: 40, y: 14 }, to: { x: 43, y: 16 } },
    { from: { x: 39, y: 15 }, to: { x: 39, y: 16 } },
    { from: { x: 40, y: 17 }, to: { x: 41, y: 17 } },
    { from: { x: 24, y: 23 }, to: { x: 26, y: 24 } },
    { from: { x: 27, y: 45 }, to: { x: 28, y: 46 } },

    { x: 44, y: 15 },
    { x: 27, y: 23 },
    { x: 29, y: 45 },

  ],
  "#fdd0f1": [
    { from: { x: 47, y: 6 }, to: { x: 47, y: 13 } },
    { from: { x: 48, y: 7 }, to: { x: 48, y: 11 } },
    { from: { x: 46, y: 11 }, to: { x: 46, y: 14 } },
    { from: { x: 46, y: 17 }, to: { x: 46, y: 23 } },
    { from: { x: 45, y: 20 }, to: { x: 45, y: 26 } },
    { from: { x: 44, y: 24 }, to: { x: 44, y: 28 } },
    { from: { x: 43, y: 27 }, to: { x: 43, y: 29 } },
    { from: { x: 42, y: 29 }, to: { x: 42, y: 30 } },
    { from: { x: 41, y: 30 }, to: { x: 41, y: 32 } },
    { from: { x: 40, y: 31 }, to: { x: 40, y: 33 } },
    { from: { x: 39, y: 32 }, to: { x: 39, y: 33 } },
    { from: { x: 38, y: 33 }, to: { x: 38, y: 34 } },
    { from: { x: 35, y: 35 }, to: { x: 36, y: 35 } },
    { from: { x: 33, y: 36 }, to: { x: 34, y: 36 } },
    { from: { x: 31, y: 37 }, to: { x: 32, y: 37 } },
    { from: { x: 11, y: 33 }, to: { x: 12, y: 33 } },
    { from: { x: 10, y: 32 }, to: { x: 11, y: 32 } },
    { from: { x: 9, y: 31 }, to: { x: 10, y: 31 } },
    { from: { x: 8, y: 30 }, to: { x: 9, y: 30 } },
    { from: { x: 7, y: 29 }, to: { x: 8, y: 29 } },
    { from: { x: 4, y: 27 }, to: { x: 10, y: 27 } },
    { from: { x: 3, y: 26 }, to: { x: 4, y: 26 } },
    { from: { x: 2, y: 25 }, to: { x: 3, y: 25 } },
    { from: { x: 1, y: 22 }, to: { x: 2, y: 24 } },
    { from: { x: 1, y: 20 }, to: { x: 1, y: 21 } },
    { from: { x: 6, y: 12 }, to: { x: 7, y: 13 } },
    { from: { x: 8, y: 9 }, to: { x: 8, y: 10 } },

    { x: 7, y: 11 },
    { x: 9, y: 8 },
    { x: 10, y: 7 },
    { x: 37, y: 34 },
    { x: 46, y: 5 },
  ],
  "#f48897": [
    { from: { x: 44, y: 20 }, to: { x: 44, y: 23 } },
    { from: { x: 43, y: 23 }, to: { x: 43, y: 26 } },
    { from: { x: 41, y: 24 }, to: { x: 42, y: 28 } },
    { from: { x: 40, y: 25 }, to: { x: 40, y: 30 } },
    { from: { x: 37, y: 27 }, to: { x: 39, y: 31 } },
    { from: { x: 35, y: 28 }, to: { x: 38, y: 32 } },
    { from: { x: 34, y: 33 }, to: { x: 37, y: 33 } },
    { from: { x: 33, y: 34 }, to: { x: 34, y: 35 } },
    { from: { x: 35, y: 34 }, to: { x: 36, y: 34 } },
    { from: { x: 12, y: 28 }, to: { x: 13, y: 30 } },
    { from: { x: 10, y: 29 }, to: { x: 11, y: 30 } },
    { from: { x: 11, y: 31 }, to: { x: 12, y: 31 } },
    { from: { x: 12, y: 22 }, to: { x: 16, y: 25 } },
    { from: { x: 15, y: 26 }, to: { x: 15, y: 27 } },
    { from: { x: 17, y: 23 }, to: { x: 18, y: 24 } },
    { from: { x: 5, y: 24 }, to: { x: 13, y: 26 } },
    { from: { x: 14, y: 20 }, to: { x: 15, y: 21 } },
    { from: { x: 3, y: 23 }, to: { x: 3, y: 24 } },
    { from: { x: 4, y: 24 }, to: { x: 4, y: 25 } },
    { from: { x: 46, y: 8 }, to: { x: 46, y: 10 } },
    { from: { x: 45, y: 9 }, to: { x: 45, y: 12 } },

    { x: 41, y: 29 },
    { x: 34, y: 32 },
    { x: 32, y: 36 },
    { x: 14, y: 28 },
    { x: 9, y: 29 },
    { x: 12, y: 32 },
    { x: 16, y: 26 },
    { x: 17, y: 25 },
    { x: 11, y: 27 },
    { x: 11, y: 23 },
    { x: 44, y: 10 },

  ],
  "#fba6bb": [
    { from: { x: 40, y: 4 }, to: { x: 45, y: 5 } },
    { from: { x: 42, y: 6 }, to: { x: 46, y: 7 } },
    { from: { x: 43, y: 8 }, to: { x: 45, y: 8 } },
    { from: { x: 12, y: 5 }, to: { x: 23, y: 15 } },
    { from: { x: 24, y: 12 }, to: { x: 24, y: 15 } },
    { from: { x: 25, y: 15 }, to: { x: 25, y: 21 } },
    { from: { x: 26, y: 17 }, to: { x: 26, y: 20 } },
    { from: { x: 27, y: 18 }, to: { x: 30, y: 20 } },
    { from: { x: 30, y: 17 }, to: { x: 34, y: 17 } },
    { from: { x: 31, y: 14 }, to: { x: 34, y: 16 } },
    { from: { x: 30, y: 11 }, to: { x: 33, y: 13 } },
    { from: { x: 30, y: 2 }, to: { x: 32, y: 10 } },
    { from: { x: 29, y: 2 }, to: { x: 29, y: 9} },
    { from: { x: 27, y: 1 }, to: { x: 28, y: 6} },
    { from: { x: 20, y: 1 }, to: { x: 26, y: 5} },
    { from: { x: 33, y: 4 }, to: { x: 37, y: 5} },
    { from: { x: 33, y: 3 }, to: { x: 34, y: 3} },
    { from: { x: 38, y: 5 }, to: { x: 38, y: 10} },
    { from: { x: 37, y: 6 }, to: { x: 37, y: 8} },
    { from: { x: 36, y: 17 }, to: { x: 39, y: 26} },
    { from: { x: 35, y: 19 }, to: { x: 35, y: 23} },
    { from: { x: 31, y: 20 }, to: { x: 34, y: 21} },
    { from: { x: 40, y: 18 }, to: { x: 42, y: 23} },
    { from: { x: 42, y: 17 }, to: { x: 45, y: 19} },
    { from: { x: 43, y: 20 }, to: { x: 43, y: 23} },
    { from: { x: 35, y: 27 }, to: { x: 36, y: 27} },
    { from: { x: 39, y: 11 }, to: { x: 43, y: 13} },
    { from: { x: 39, y: 9 }, to: { x: 42, y: 10} },
    { from: { x: 44, y: 13 }, to: { x: 44, y: 14} },
    { from: { x: 45, y: 15 }, to: { x: 45, y: 16} },
    { from: { x: 39, y: 7 }, to: { x: 40, y: 8} },
    { from: { x: 16, y: 20 }, to: { x: 24, y: 21} },
    { from: { x: 17, y: 22 }, to: { x: 22, y: 22} },
    { from: { x: 19, y: 23 }, to: { x: 20, y: 23} },
    { from: { x: 4, y: 16 }, to: { x: 18, y: 19} },
    { from: { x: 4, y: 20 }, to: { x: 10, y: 23} },
    { from: { x: 11, y: 20 }, to: { x: 13, y: 21} },
    { from: { x: 3, y: 18 }, to: { x: 3, y: 22} },
    { from: { x: 2, y: 19 }, to: { x: 2, y: 21} },
    { from: { x: 10, y: 8 }, to: { x: 11, y: 15} },
    { from: { x: 9, y: 9 }, to: { x: 9, y: 12} },
    { from: { x: 8, y: 11 }, to: { x: 8, y: 12} },
    { from: { x: 8, y: 14 }, to: { x: 9, y: 15} },
    { from: { x: 11, y: 6 }, to: { x: 11, y: 7} },
    { from: { x: 15, y: 3 }, to: { x: 19, y: 4} },
    { from: { x: 18, y: 2 }, to: { x: 19, y: 2} },
    { from: { x: 6, y: 15 }, to: { x: 7, y: 15} },

    { x: 28, y: 7 },
    { x: 24, y: 6 },
    { x: 36, y: 6 },
    { x: 35, y: 16 },
    { x: 34, y: 19 },
    { x: 31, y: 19 },
    { x: 34, y: 22 },
    { x: 38, y: 16 },
    { x: 40, y: 24 },
    { x: 39, y: 14 },
    { x: 44, y: 16 },
    { x: 39, y: 6 },
    { x: 41, y: 8 },
    { x: 24, y: 19 },
    { x: 19, y: 19 },
    { x: 11, y: 22 },
    { x: 14, y: 4 },
    { x: 41, y: 6 },
    { x: 44, y: 9 },

  ],
  "#d90258": [
    { from: { x: 22, y: 43 }, to: { x: 26, y: 48 } },
    { from: { x: 21, y: 43 }, to: { x: 21, y: 46 } },
    { from: { x: 20, y: 43 }, to: { x: 20, y: 44 } },
    { from: { x: 24, y: 42 }, to: { x: 29, y: 42 } },
    { from: { x: 27, y: 43 }, to: { x: 30, y: 44 } },
    { from: { x: 26, y: 41 }, to: { x: 27, y: 41 } },
    { from: { x: 27, y: 47 }, to: { x: 29, y: 47 } },
    { from: { x: 29, y: 46 }, to: { x: 30, y: 46 } },
    { from: { x: 30, y: 45 }, to: { x: 31, y: 45 } },
    { from: { x: 31, y: 44 }, to: { x: 33, y: 44} },
    { from: { x: 33, y: 43 }, to: { x: 34, y: 43} },
    { from: { x: 35, y: 41 }, to: { x: 35, y: 42} },
    { from: { x: 36, y: 39 }, to: { x: 36, y: 40} },
    { from: { x: 37, y: 38 }, to: { x: 37, y: 39} },
    { from: { x: 38, y: 36 }, to: { x: 38, y: 37} },
    { from: { x: 28, y: 22 }, to: { x: 30, y: 23} },
    { from: { x: 26, y: 22 }, to: { x: 27, y: 22} },

    { from: { x: 27, y: 22 }, to: { x: 26, y: 22} },
    { from: { x: 21, y: 24 }, to: { x: 23, y: 24} },
    { from: { x: 19, y: 25 }, to: { x: 25, y: 25} },
    { from: { x: 18, y: 26 }, to: { x: 24, y: 26} },
    { from: { x: 17, y: 27 }, to: { x: 22, y: 27} },
    // { from: { x: 16, y: 18 }, to: { x: 21, y: 28} },
    // { from: { x: 19, y: 29 }, to: { x: 19, y: 30} },
    { from: { x: 17, y: 27 }, to: { x: 19, y: 30} },
    { from: { x: 16, y: 31 }, to: { x: 18, y: 31} },
    { from: { x: 17, y: 32 }, to: { x: 17, y: 33} },
    { from: { x: 13, y: 34 }, to: { x: 13, y: 35} },
    { from: { x: 14, y: 31 }, to: { x: 14, y: 33} },
    { from: { x: 15, y: 30 }, to: { x: 15, y: 30} },
    { from: { x: 16, y: 28 }, to: { x: 16, y: 29} },
    { from: { x: 19, y: 26 }, to: { x: 22, y: 28} },
    { from: { x: 23, y: 24 }, to: { x: 23, y: 26} },
    { from: { x: 18, y: 26 }, to: { x: 18, y: 26} },
    { from: { x: 20, y: 28 }, to: { x: 20, y: 29} },
    { from: { x: 21, y: 24 }, to: { x: 22, y: 24} },
    { from: { x: 24, y: 25 }, to: { x: 24, y: 26} },
    { x: 27, y: 48 },
    { x: 34, y: 42 },
    { x: 39, y: 35 },
    { x: 16, y: 32 },
    { x: 25, y: 25 },
    { x: 27, y: 24 },
    { x: 23, y: 23 },

  ],
  "#8a043b": [
    { from: { x: 31, y: 23 }, to: { x: 33, y: 30 } },
    { from: { x: 28, y: 24 }, to: { x: 30, y: 29 } },
    { from: { x: 26, y: 25 }, to: { x: 27, y: 29 } },
    { from: { x: 22, y: 26 }, to: { x: 25, y: 28} },
    { from: { x: 34, y: 24 }, to: { x: 34, y: 26} },

    { x: 27, y: 48 },
  ],
  "#97023f": [
    { from: { x: 21, y: 29 }, to: { x: 25, y: 37 } },
    { from: { x: 26, y: 30 }, to: { x: 29, y: 37 } },
    { from: { x: 30, y: 30 }, to: { x: 30, y: 36 } },
    { from: { x: 31, y: 31 }, to: { x: 32, y: 33 } },
    { from: { x: 31, y: 34 }, to: { x: 31, y: 35 } },
    { from: { x: 27, y: 38 }, to: { x: 27, y: 35 } },
    { from: { x: 20, y: 30 }, to: { x: 20, y: 33 } },
    { from: { x: 18, y: 32 }, to: { x: 19, y: 33 } },
    { from: { x: 14, y: 34 }, to: { x: 20, y: 38 } },
    { from: { x: 15, y: 31 }, to: { x: 15, y: 33 } },
    { from: { x: 15, y: 39 }, to: { x: 18, y: 39 } },
    { from: { x: 16, y: 40 }, to: { x: 17, y: 40 } },
    { from: { x: 27, y: 38 }, to: { x: 28, y: 38 } },

    { x: 27, y: 48 },
    { x: 33, y: 31 },
    { x: 19, y: 31 },
    { x: 16, y: 30 },
    { x: 16, y: 33 },
    { x: 15, y: 29 },

  ],
  "#ba0e4e": [
    { from: { x: 19, y: 39 }, to: { x: 23, y: 41 } },
    { from: { x: 18, y: 40 }, to: { x: 18, y: 41 } },
    { from: { x: 21, y: 38 }, to: { x: 26, y: 38 } },
    { from: { x: 24, y: 39 }, to: { x: 27, y: 39 } },
    { from: { x: 24, y: 40 }, to: { x: 25, y: 40 } },
    { from: { x: 29, y: 39 }, to: { x: 34, y: 41 } },
    { from: { x: 28, y: 40 }, to: { x: 28, y: 41 } },
    { from: { x: 33, y: 38 }, to: { x: 36, y: 38 } },
    { from: { x: 35, y: 39 }, to: { x: 35, y: 40 } },
    { from: { x: 31, y: 42 }, to: { x: 32, y: 43 } },
    { from: { x: 35, y: 37 }, to: { x: 37, y: 37 } },

    { x: 30, y: 42 },
    { x: 33, y: 42 },
    { x: 37, y: 36 },
    { x: 39, y: 35 },

  ]
};

setColors(path);
