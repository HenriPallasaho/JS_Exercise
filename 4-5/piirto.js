// Teht. 4.
let wi = document.getElementById('myCanvas').width;
let he = document.getElementById('myCanvas').height;

const drawK = (j) => {
  for (let i = 0; i < wi + 1; i += 20) {
    const c = document.getElementById('myCanvas');
    const ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(i, j);
    ctx.lineTo(i - 10, j + 15);
    ctx.lineTo(i, j + 30);
    ctx.lineTo(i + 10, j + 45);
    ctx.lineTo(i, j + 60);
    ctx.stroke();
  }
};

const drawLines = () => {
  for (let j = 0; j < he + 1; j += 60) {
    drawK(j);
  }
};

document.querySelector('#piirraSiksak').addEventListener('click', () => {
  console.log('piirtää Siksak');
  drawLines();
});

// Teht. 5.
let wi2 = document.getElementById('myCanvas2').width;
let he2 = document.getElementById('myCanvas2').height;
const c = document.getElementById('myCanvas2');
const ctx = c.getContext('2d');

const drawK2 = (j, n) => {
  for (let i = 0; i < wi2 + 1; i += 20) {
    ctx.beginPath();
    ctx.moveTo(i, j);
    ctx.lineTo(i - n, j + 15);
    ctx.lineTo(i, j + 30);
    ctx.lineTo(i + n, j + 45);
    ctx.lineTo(i, j + 60);
    ctx.stroke();
    console.log(i, j, n);
  }
};

const drawLines2 = () => {
  let n = document.getElementById('slider').value;
  ctx.clearRect(0, 0, c.width, c.height);
  for (let j = 0; j < he2 + 1; j += 60) {
    drawK2(j, n);
  }
};

document.querySelector('#piirraSiksak2').addEventListener('click', () => {
  console.log('piirtää Siksak 2');
  drawLines2();
  let x = document.getElementById('slider').value;
  document.getElementById('demo').innerHTML = x;
});
