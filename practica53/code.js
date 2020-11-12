document.addEventListener("DOMContentLoaded", () => {

  let cvs = document.getElementById("micanvas");
  let ctx = cvs.getContext("2d");


  let gradient = ctx.createLinearGradient(100,0,cvs.width-100,0);
  gradient.addColorStop(0,'yellow');
  gradient.addColorStop(1,'green');


  let x = 20;
  let y = 40;
  ctx.lineCap='round';
  ctx.lineJoin='round';
  ctx.lineWidth=15;
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x+30,y+50);
  ctx.lineTo(x+60,y);
  ctx.lineTo(x+90,y+50);
  ctx.lineTo(x+120,y);
  ctx.lineTo(x+150,y+50);
  ctx.lineTo(x+180,y);
  ctx.lineTo(x+210,y+50);
  ctx.lineTo(x+240,y);
  ctx.lineTo(x+270,y+50);
  ctx.lineTo(x+300,y);
  ctx.lineTo(x+330,y+50);
  ctx.lineTo(x+360,y);


  ctx.strokeStyle = gradient;


  ctx.stroke();

  ctx.font = "50px Arial";
  ctx.fillText("Zig Zag",100,150);


});
