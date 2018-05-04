const c = document.getElementById('myCanvas');
const context = c.getContext('2d');
// const textField = document.querySelector('#textField');
const drawBtn = document.querySelector('#draw');

let originX = 0;
let originY = 0;

let currentX = 0;
let currentY = 0;
let offsetX = 1;
let offsetY = 1;

const animate = () => {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, c.width, c.height);
  animateLine();
};

const animateLine = () => {
  currentX += offsetX;
  currentY += offsetY;

  if (!isBetween(currentX, 0, c.width)) {
    offsetX *= -1;
    originX = currentX;
    originY = currentY;
  }

  if (!isBetween(currentY, 0, c.height)) {
    offsetY *= -1;
    originX = currentX;
    originY = currentY;
  }

  context.beginPath();
  context.moveTo(originX, originY);
  context.lineTo(currentX, currentY);
  context.stroke();
};

const isBetween = (numb, min, max) => {
  return numb >= min && numb <= max;
};

drawBtn.addEventListener('click', () => {
  animate();
});


