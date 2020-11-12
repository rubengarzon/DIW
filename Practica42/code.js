{

document.addEventListener("DOMContentLoaded", () => {


  cvs = document.getElementById("micanvas");
  ctx = cvs.getContext('2d');

  ctx.beginPath();
    ctx.moveTo(30,5);
    ctx.lineTo(85,65);
    ctx.lineTo(50,125);
    ctx.lineTo(200,65);
    ctx.fillStyle = "orange";
    ctx.fill();


});

}
