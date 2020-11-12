document.addEventListener("DOMContentLoaded", () => {

  let img = new Image();


  img.src = 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Puente_romano_y_mezquita.jpg';
  let CanvasXSize = 400;
  let CanvasYSize = 100;
  let speed = 30;
  let scale = 0.35;
  let y = -4.5;


  let dx = 0.75;
  let imgW;
  let imgH;
  let x = 0;
  let clearX;
  let clearY;
  let ctx;

  img.onload = function() {
    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > CanvasXSize) {
      x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
      clearX = imgW;
    } else {
      clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {
      clearY = imgH;
    } else {
      clearY = CanvasYSize;
    }

    return setInterval(draw, speed);
  }

  function draw() {
    ctx = document.getElementById('micanvas').getContext('2d');

    ctx.clearRect(0, 0, clearX, clearY);

    if (imgW <= CanvasXSize) {
      if (x > CanvasXSize) {
        x = -imgW + x;
      }
      if (x > 0) {
        ctx.drawImage(img, -imgW + x, y, imgW, imgH);
      }
      if (x - imgW > 0) {
        ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
      }
    }

    else {
      if (x > (CanvasXSize)) {
        x = CanvasXSize - imgW;
      }
      if (x > (CanvasXSize-imgW)) {
        ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
      }
    }
    ctx.drawImage(img, x, y,imgW, imgH);
    x += dx;
  }


});
