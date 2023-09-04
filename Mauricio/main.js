let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const DRAW = "./mario.json";
const pixelCanvasSize = [640, 480]; //128 dibujo anterior
const gridSizeW = canvas.width / pixelCanvasSize[0];
const gridSizeH = canvas.height / pixelCanvasSize[1];

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

    // const grd = ctx.createLinearGradient(0, 200, 200, 0);
    // grd.addColorStop(0, "yellow");
    // grd.addColorStop(0.5, "purple");
    // grd.addColorStop(1, "white");

    // context.strokeStyle = grd;
    // context.lineWidth = 0.3;
    // context.strokeRect(x, y, this.width, this.height);
  }

  setColor(color) {
    this.context.fillStyle = color;
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.render();
  }
}

async function init() {
  // Se inicializa las rejillas
  for (let j = 0; j < pixelCanvasSize[1]; j++) {
    grids[j] = [];
    for (let i = 0; i < pixelCanvasSize[0]; i++) {
      grids[j][i] = new Grid(
        i * gridSizeW,
        j * gridSizeH,
        gridSizeW,
        gridSizeH,
        ctx
      );
    }
  }
  let path = await (await fetch(DRAW)).json();

  setColors(path);
  setLightFloorPattern();
  setFloorPattern();
  drawTree(2,341);
  drawTree(43,341);
  drawEmptyBlock(2, 233)
  drawEmptyBlock(43, 233, true);
  drawEmptyBlock(127, 126, true);
  drawEmptyBlock(168, 126);
  drawEmptyBlock(599, 162, true);
  drawPlatform();

  // Tunel
  fillGrids(457, 269, 539, 304, "#000");
  fillGrids(460, 304, 536, 377, "#000");
  fillGrids(460, 271, 534, 300, "#4cdc48");
  fillGrids(462, 305, 531, 376, "#4cdc48");

  fillGrids(460, 274, 464, 300, "#00a800");
  fillGrids(467, 274, 469, 300, "#00a800");
  fillGrids(478, 274, 482, 300, "#00a800");
  fillGrids(486, 274, 505, 300, "#00a800");
  fillGrids(509, 274, 510, 300, "#00a800");
  fillGrids(514, 274, 516, 300, "#00a800");
  fillGrids(519, 274, 521, 300, "#00a800");
  fillGrids(532, 274, 534, 300, "#00a800");
  fillGrids(462, 305, 466, 376, "#00a800");
  fillGrids(470, 305, 472, 376, "#00a800");
  fillGrids(480, 305, 485, 376, "#00a800");
  fillGrids(488, 305, 503, 376, "#00a800");
  fillGrids(506, 305, 508, 376, "#00a800");
  fillGrids(511, 305, 513, 376, "#00a800");
  fillGrids(517, 305, 518, 376, "#00a800");
  fillGrids(530, 305, 531, 376, "#00a800");

  fillGrids(511, 274, 513, 300, "#000");
  fillGrids(517, 274, 518, 300, "#000");
  fillGrids(522, 274, 531, 300, "#000");
  fillGrids(509, 305, 510, 376, "#000");
  fillGrids(514, 305, 516, 376, "#000");
  fillGrids(519, 305, 529, 376, "#000");

}

function setColors(paths) {
  let colors = Object.keys(paths);

  colors.map((color) => {
    paths[color].map((pixel) => {
      if (pixel.from && pixel.to) {
        fillGrids(
          pixel.from[0],
          pixel.from[1],
          pixel.to[0],
          pixel.to[1],
          color
        );
        return;
      }
      grids[pixel[1]][pixel[0]].setColor(color);
    });
  });
}

// Cosas para el mapa de mario
function setLightFloorPattern(x, y) {
  for (let i = 0; i < 32; i++) {
    fillGrids(i * 20, 391, i * 20 + 6, 392, "#fc9838");
    fillGrids(i * 20 + 2, 393, i * 20 + 9, 394, "#fc9838");
    fillGrids(i * 20, 393, i * 20 + 1, 394, "#fcbcb0");
    fillGrids(i * 20 + 7, 391, i * 20 + 19, 392, "#fcbcb0");
    fillGrids(i * 20 + 10, 393, i * 20 + 19, 394, "#fcbcb0");
  }
}

function setFloorPattern() {
  for (let i = 0; i < 32; i++) {
    fillGrids((i*20), 395, (i*20) + 19, 412, "#fc9838");
    
    fillGrids((i*20), 402, (i*20) + 1, 405, "#000");
    fillGrids((i*20)+2, 404, (i*20) + 6, 405, "#000");
    fillGrids((i*20)+4, 406, (i*20) + 11, 408, "#000");
    fillGrids((i*20)+10, 409, (i*20) + 14, 410, "#000");
    fillGrids((i*20)+12, 411, (i*20) + 19, 412, "#000");
    fillGrids((i*20)+4, 395, (i*20) + 11, 396, "#000");
    fillGrids((i*20)+7, 397, (i*20) + 16, 399, "#000");
    fillGrids((i*20)+12, 400, (i*20) + 19, 401, "#000");
    fillGrids((i*20)+17, 402, (i*20) + 19, 403, "#000");
  }
}

function drawTree(x,y) {
  // 2 341 
  let pivot = {x:2, y: 341}
  
  fillGrids(x, y + 25, x+1, y + 33, "#000");
  fillGrids(x + (4-pivot.x), y + (359-pivot.y), x + (6-pivot.x), y + (365-pivot.y), "#000");
  fillGrids(x + (7-pivot.x), y + (350-pivot.y),x + (9-pivot.x),y + (358-pivot.y), "#000");
  fillGrids(x + (10-pivot.x), y + (352-pivot.y), x + (11-pivot.x), y + (354-pivot.y), "#000");
  fillGrids(x + 10, y + 9, x + 14, y + 10, "#000");
  fillGrids(x + 13, y + 7, x + 25, y + 8, "#000");
  fillGrids(x + 26, y + 9, x + 27, y + 10, "#000");
  fillGrids(x + 28, y + 11, x + 30, y + 22, "#000");
  fillGrids(x + 31, y + 16, x + 35, y + 17, "#000");
  fillGrids(x + 33, y + 11, x + 35, y + 15, "#000");
  fillGrids(x + 36, y + 18, x + 38, y + 22, "#000");
  fillGrids(x + 39, y + 23, x + 40, y + 33, "#000");
  fillGrids(x + 36, y + 34, x + 38, y + 35, "#000");
  fillGrids(x + 2, y + 34, x + 4, y + 35, "#000");
  fillGrids(x + 31, y + 7, x + 32,y + 10, "#000");
  fillGrids(x + 28, y + 5, x + 30, y + 6, "#000");
  fillGrids(x + 26, y + 2, x + 27, y + 4, "#000");
  fillGrids(x + 13, y, x+25, y + 1, "#000");
  fillGrids(x + 10, y + 2, x + 12, y + 4, "#000");
  fillGrids(x + 8, y + 5, x + 9, y + 8, "#000");

  fillGrids(x + 33, y + 23, x + 38, y + 33, "#00a800");
  fillGrids(x + 33, y + 18, x + 35, y + 22, "#00a800");
  fillGrids(x + 31, y + 18, x + 32, y + 19, "#00a800");
  fillGrids(x + 33, y + 32, x + 32, y + 33, "#00a800");
  fillGrids(x + 5, y + 34,  x + 35, y + 35, "#00a800");
  fillGrids(x + 2, y + 32,  x + 4, y + 33, "#00a800");
  fillGrids(x + 26, y + 11, x + 27, y + 24, "#00a800");
  fillGrids(x + 23, y + 9, x + 25, y + 15, "#00a800");
  fillGrids(x + 20, y + 9, x + 22, y + 10, "#00a800");
  fillGrids(x + 31, y + 11, x + 32, y + 15, "#00a800");
  fillGrids(x + 28, y + 7, x + 30, y + 10, "#00a800");
  fillGrids(x + 26, y + 5, x + 27, y + 8, "#00a800");
  fillGrids(x + 23, y + 2, x + 25, y + 6, "#00a800");
  fillGrids(x + 18, y + 2, x + 22, y + 4, "#00a800");
  fillGrids(x + 8, y + 9, x + 9, y + 10, "#00a800");

  fillGrids(x + 13, y + 2, x + 17, y + 6, "#4cdc48");
  fillGrids(x + 18, y + 5, x + 22, y + 6, "#4cdc48");
  fillGrids(x + 10, y + 5, x + 14, y + 8, "#4cdc48");
  fillGrids(x + 15, y + 9, x + 19, y + 10, "#4cdc48");
  fillGrids(x + 10, y + 11, x + 22, y + 13, "#4cdc48");
  fillGrids(x + 8, y + 14, x + 22, y + 17, "#4cdc48");
  fillGrids(x + 5, y + 18, x + 25, y + 24, "#4cdc48");
  fillGrids(x + 23, y + 16, x + 25, y + 17, "#4cdc48");
  fillGrids(x + 2, y + 25, x + 32, y + 31, "#4cdc48");
  fillGrids(x + 7, y + 32, x + 30, y + 33, "#4cdc48");
  fillGrids(x + 28, y + 23, x + 32, y + 24, "#4cdc48");
  fillGrids(x + 31, y + 20, x + 32, y + 22, "#4cdc48");

  fillGrids(x + 13, y + 16, x + 14, y + 22, "#fff");
  fillGrids(x + 10, y + 18, x + 17, y + 19, "#fff");
  fillGrids(x + 8, y + 25, x + 9, y + 31, "#fff");
  fillGrids(x + 5, y + 27, x + 12, y + 28, "#fff");
  fillGrids(x + 23, y + 27, x + 25, y + 33, "#fff");
  fillGrids(x + 20, y + 29, x + 27, y + 31, "#fff");
}

function drawEmptyBlock(x,y, sign) {
  // 2 233
  fillGrids(x + 2, y + 2, x + 38, y + 33, "#fc9838");

  fillGrids(x, y, x + 1, y + 35, "#000");
  fillGrids(x + 2, y + 34, x + 40, y + 35, "#000");
  fillGrids(x + 39, y + 3, x + 40, y + 33, "#000");
  fillGrids(x + 2, y, x + 40, y + 2, "#000");
  fillGrids(x + 5, y+5, x + 7, y + 6, "#000");
  fillGrids(x + 33, y + 5, x + 35, y + 6, "#000");
  fillGrids(x + 5, y + 29, x + 7, y + 31, "#000");
  fillGrids(x + 33, y + 29, x + 35, y + 31, "#000");
  
  if(sign) {
    fillGrids(x + 2, y + 2, x + 38, y + 4, "#fcbcb0");
    fillGrids(x + 2, y + 5, x + 4, y + 33, "#fcbcb0");
    fillGrids(x + 4, y + 11, x + 6, y + 13, "#fcbcb0");
    fillGrids(x + 4, y + 7, x + 19, y + 10, "#fcbcb0");
    fillGrids(x + 20, y + 9, x + 21, y + 15, "#fcbcb0");
    fillGrids(x + 12, y + 11, x + 19, y + 17, "#fcbcb0");
    fillGrids(x + 4, y + 16, x + 14, y + 19, "#fcbcb0");
    fillGrids(x + 4, y + 23, x + 11, y + 26, "#fcbcb0");
    
    fillGrids(x + 10, y + 27, x + 11, y + 28, "#000");
    fillGrids(x + 12, y + 25, x + 14, y + 28, "#000");
    fillGrids(x + 10, y + 20, x + 16, y + 22, "#000");
    fillGrids(x + 15, y + 18, x + 21, y + 19, "#000");
    fillGrids(x + 20, y + 16, x + 24, y + 17, "#000");
    fillGrids(x + 22, y + 11, x + 24, y + 17, "#000");
    fillGrids(x + 4, y + 14, x + 9, y + 15, "#000");
    fillGrids(x + 7, y + 11, x + 11, y + 13, "#000");
  }

}

function drawPlatform(params) {
  this.tornillo = (x, y) => {
    // 173 274
    fillGrids(x + 2, y, x + 11, y + 12, "#000");
    fillGrids(x, y + 2, x + 14, y + 10, "#000");

    fillGrids(x + 5, y + 2, x + 9, y + 10, "#fff");
    fillGrids(x + 2, y + 4, x + 11, y + 8, "#fff");

    fillGrids(x + 7, y + 4, x + 9, y + 5, "#000");
    fillGrids(x + 5, y + 6, x + 6, y + 8, "#000");
  }

  fillGrids(250, 200, 373, 374,"#000");
  fillGrids(253, 197, 371, 376,"#000");
  fillGrids(274, 215, 391, 377,"#000");
  fillGrids(373, 218, 394, 376,"#000");
  fillGrids(255, 200, 368, 374,"#a8e4fc");
  fillGrids(253, 202, 371, 372,"#a8e4fc");
  this.tornillo(354, 359);
  this.tornillo(354, 202);
  this.tornillo(255, 202);


  fillGrids(170, 269, 288, 376,"#000");
  fillGrids(167, 271, 290, 374,"#000");
  fillGrids(173, 271, 285, 374,"#fcbcb0");
  fillGrids(170, 274, 288, 372,"#fcbcb0");
  fillGrids(291, 287, 308, 378,"#000");
  fillGrids(289, 289, 310, 376,"#000");
  this.tornillo(173, 274);
  this.tornillo(271, 274);
  this.tornillo(173, 359);
  this.tornillo(271, 359);

  // 4cdc48
  fillGrids(584, 269, 639, 376,"#000");
  fillGrids(581, 271, 639, 374,"#000");
  fillGrids(586, 271, 639, 374,"#4cdc48");
  fillGrids(584, 274, 639, 372,"#4cdc48");
  this.tornillo(586, 359);
  this.tornillo(586, 274);
}

function fillGrids(x1, y1, x2, y2, color) {
  for (let i = y1; i <= y2; i++) {
    for (let j = x1; j <= x2; j++) {
      grids[i][j].setColor(color);
    }
  }
}


init();
