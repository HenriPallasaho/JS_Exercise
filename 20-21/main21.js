const drawBtn = document.querySelector('#drawBtn');
let data = [];

const drawMe = () => {
  d3.select('.chart').
      selectAll('div').
      data(data).
      enter().
      append('div').
      style('width', function(d) {
        return d + 'px';
      }).
      text(function(d) {
        return d;
      });
};

const haeJson = () => {
  data = [];
  fetch('https://users.metropolia.fi/~henripal/Harri20-21/jsoni.json').
  then((response) => {
    return response.json();
  }).
      then((result) => {
        console.log(result);
       let i = 0;
        for (val in result.file) {
          console.log(result.file[i].data);
          data.push(result.file[i].data);
          i++;
          console.log(result);
        }
        drawMe();
      });
};

drawBtn.addEventListener('click', () => {
  haeJson();
});