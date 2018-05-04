// Teht. 1.
const drawLine = () => {
  console.log('piirtää viivan');
  const c = document.getElementById('myCanvas');
  const ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(250, 110);
  ctx.stroke();
};

document.querySelector('#piirra').addEventListener('click', drawLine);

// Teht. 2.
const addCoordinate = (varX, varY, array) => {
  array.push({x: varX, y: varY});
};

let list = [];
addCoordinate(200, 20, list);
addCoordinate(20, 120, list);

const drawArray = (array) => {
  console.log('piirtää toisen');
  const c = document.getElementById('myCanvas');
  const ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(array[0].x, array[0].y);
  ctx.lineTo(array[1].x, array[1].y);
  ctx.stroke();
};

document.querySelector('#piirraToinen').addEventListener('click', () => {
  drawArray(list);
});

// Teht. 3.
let wi = document.getElementById('myCanvas').width;
let he = document.getElementById('myCanvas').height;
/*
const wiRounded = Math.round(wi / 5);
const heRounded = Math.round(he / 10);

console.log(wi, he);
console.log('wiRounded = ' + wiRounded, 'heRounded = ' + heRounded);
*/

const drawWiLines = () => {
  for (let w = 0; w < wi + 1; w += 5) {
    const c = document.getElementById('myCanvas');
    const ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(w, 0);
    ctx.lineTo(w, 150);
    ctx.stroke();
  }
};

const drawHeLines = () => {
  for (let h = 0; h < he + 1; h += 10) {
    const c = document.getElementById('myCanvas');
    const ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(300, h);
    ctx.stroke();
  }
};

document.querySelector('#piirraRuudukko').addEventListener('click', () => {
  console.log('piiträä ruudukon');
  drawHeLines() + drawWiLines();
});
