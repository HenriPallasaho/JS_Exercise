const c = document.getElementById('myCanvas');
const context = c.getContext('2d');
// const textField = document.querySelector('#textField');
const drawBtn = document.querySelector('#draw');

const addCoordinant = (varX, varY, arr) => {
  console.log(varX);
  arr.push({x: varX, y: varY});
};

const drawArray = (array) => {
  context.beginPath();
  context.moveTo(array[0].x, array[0].y);
  context.lineTo(array[1].x, array[1].y);
  context.lineTo(array[2].x, array[2].y);
  context.lineTo(array[3].x, array[3].y);
  context.stroke();
};

let array = [];
const haeJson = () => {

  // 'http://users.metropolia.fi/~harria/JavaJSON/LineData.txt'
  // tai
  // 'json.txt'
  // tai
  // 'https://users.metropolia.fi/~henripal/json.txt'

  fetch('https://users.metropolia.fi/~henripal/json.txt').
      then((response) => {
        return response.json();
      }).
      then((result) => {
        console.log(result);
        let addX = true;
        let tempX = null;
        let textHeight = 100;

        for (let property in result) {
          if (result.hasOwnProperty(property) &&
              Number.isInteger(result[property])) {
            console.log(addX);

            if (addX) {
              tempX = result[property];
              addX = false;
              console.log('tempX: ' + tempX);

            } else {
              addCoordinant(tempX, result[property], array);
              console.log(array);
              addX = true;
            }
          } else {
            if (property == 'color') {
              color = result[property];
            } else {
              context.fillText(result[property], 20, textHeight);
              textHeight += 20;
            }
            console.log('text: ' + property);
          }
        }
      });
};

haeJson();
drawBtn.addEventListener('click', () => {
  console.log(array);
  drawArray(array);
});


