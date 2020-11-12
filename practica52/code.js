document.addEventListener("DOMContentLoaded", () => {
      let cvs = document.getElementById('micanvas');
      let ctx = cvs.getContext('2d');
      let img = new Image();

      img.src='./img/estadiocordobacf.jpg';

      img.onload = function(){
        ctx.drawImage(img, 0, 0);
        ctx.drawImage(img,0,250,400,100);
        ctx.drawImage(img,0,0,200,539,0,460,200,539);
        ctx.drawImage(img,0,100,570,300,0,800,870,400);
      }

});
