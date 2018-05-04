const c = document.getElementById('myCanvas');
const context = c.getContext('2d');
const textField = document.querySelector('#textField');

const addCoordinant = (varX, varY, arr) => {
  arr.push({x: varX, y: varY});
};

const drawArray = (array) => {
  context.beginPath();
  context.arc((array[0].x), array[0].y, 3, 0, 2 * Math.PI);
  context.stroke();

  context.beginPath();
  context.arc(array[1].x, array[1].y, 3, 0, 2 * Math.PI);

  context.moveTo((array[0].x), array[0].y);
  context.lineTo(array[1].x, array[1].y);
  context.stroke();
};

const isBetween = (numb, min, max) => {
  return numb >= min && numb <= max;
};

let taulukko = [];
let firstClick = true;

const getCoordinant = (event) => {
  let x;
  let y;
  if (event.pageX || event.pageY) {
    x = event.pageX;
    y = event.pageY;
  } else {
    x = event.clientX + document.body.scrollLeft +
        document.documentElement.scrollLeft;
    y = event.clientY + document.body.scrollTop +
        document.documentElement.scrollTop;
  }
  x -= c.offsetLeft;
  y -= c.offsetTop;

  // if canvasin sisällä
  if (isBetween(x, 0, c.width)) {
    if (isBetween(y, 0, c.height)) {
      addCoordinant(x, y, taulukko);
      textField.innerHTML = 'X = ' + x + ' Y = ' + y;

      if (firstClick) {
        firstClick = false;
        c.style.cursor = 'crosshair';
      } else {
        drawArray(taulukko);
        taulukko = []; // CLEAR Taulukko
        c.style.cursor = 'auto';
        firstClick = true;
      }
    } else {
      alert('Y over the canvas, min 0, max ' + c.height);
    }
  } else {
    alert('X over the canvas, min 0, max ' + c.width);
  }
};

document.addEventListener('click', getCoordinant);

