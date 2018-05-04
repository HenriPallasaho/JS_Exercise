const piirraMinulle = () => {
  let elem = document.getElementById('myAnimation');

  let pos = 0;
  let kulma = 0;
  let id = setInterval(frame, 9);
  function frame() {
    if (pos === 334) {
      clearInterval(id);
    } else {
      let tekstiNumero = kulma.toString();
      let alkuosa = 'rotate(';
      let loppuosa = 'deg)';
      let osa1 = alkuosa.concat(tekstiNumero);
      let kaannetaan = osa1.concat(loppuosa);

      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
      // Code for Safari
      elem.style.WebkitTransform = kaannetaan;
      // Code for IE9
      elem.style.msTransform = kaannetaan;
      // Standard syntax
      elem.style.transform = kaannetaan;
      kulma = parseInt(tekstiNumero);
      kulma = kulma -20;
    }
  }
};