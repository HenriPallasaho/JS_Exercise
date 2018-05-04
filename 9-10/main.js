let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');

const piirraUusiViiva = (sx, sy, ex, ey) => {
  ctx.beginPath();
  ctx.moveTo(sx, sy);
  ctx.lineTo(ex, ey);
  ctx.stroke();
};

const validateForm = () => {

  const cWidthNum = c.width;
  const cHeightNum = c.height;

  let sx = document.getElementById('x1').value;
  let sy = document.getElementById('y1').value;
  let ex = document.getElementById('x2').value;
  let ey = document.getElementById('y2').value;
  saveLine(sx, sy, ex, ey); // T9
  console.log(sx);
  console.log(sy);
  console.log(ex);
  console.log(ey);
  console.log(cHeightNum);
  console.log(c.height);

  if (sx >= cWidthNum) {
    alert('Viiva ylittää Canvaksen pinta-alan X-suunnassa (X1). Suurin arvo: ' +
        cWidthNum);
  } else if (ex >= cWidthNum) {
    alert('Viiva ylittää Canvaksen pinta-alan X-suunnassa (X2). Suurin arvo:  ' +
        cWidthNum);
  } else if (sy >= cHeightNum) {
    alert('Viiva ylittää Canvaksen pinta-alan Y-suunnassa (Y1). Suurin arvo:  ' +
        cHeightNum);
  } else if (ey >= cHeightNum) {
    alert('Viiva ylittää Canvaksen pinta-alan Y-suunnassa (Y2). Suurin arvo:  ' +
        cHeightNum);
  } else {
    piirraUusiViiva(sx, sy, ex, ey);
  }
};
const resizeCanvas = () => {
  let cWidth = document.querySelector('#x').value.concat('px');
  let cHeight = document.querySelector('#y').value.concat('px');
  let cWidthNum = document.querySelector('#x').value;
  let cHeightNum = document.querySelector('#y').value;

  c.style.width = cWidth;
  c.style.height = cHeight;
  c.width = cWidthNum;
  c.height = cHeightNum;

  console.log(cWidth);
  console.log(c.style.width);
  console.log(c.width);
  getLines(); // T9
};

/* teht 8 =================== */
/*
 const adjustCanvas = () => {
  c.width = canvasWidth.value;
  c.height = canvasHeight.value;
  getLinesFromLS();
};

adjustCanvasBtn.addEventListener('click', adjustCanvas);
*/

/* TEHTÄVÄ 9 ============================ */

const saveLine = (sx, sy, ex, ey) => {
  const i = linesArray.length;
  linesArray[i] = [sx, sy, ex, ey];
  console.log(linesArray);
};

const getLines = () => {
  let i = 0;
  for (let line of linesArray) {
    const sx = linesArray[i][0];
    const sy = linesArray[i][1];
    const ex = linesArray[i][2];
    const ey = linesArray[i][3];

    piirraUusiViiva(sx, sy, ex, ey);
    i++;
  }
};

/* ===================  */

let linesArray = [];

const resize = document.querySelector('#resize');
const draw = document.querySelector('#piirraUusi');

resize.addEventListener('click', (evt) => {
  resizeCanvas();
});

draw.addEventListener('click', (evt) => {
  validateForm();
});
