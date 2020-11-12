{
    let cvs, ctx, posx = 0;
    const VELOCIDAD = 2.0;




document.addEventListener("DOMContentLoaded", () => {
  function anim(){

    cvs = document.getElementById("micanvas");
    img = document.getElementById("img");
    img.style.display = "none";
    ctx = cvs.getContext('2d');

    requestAnimationFrame(anim);



    if(posx != 440){
      ctx.fillStyle = "#003fff";
      ctx.fillRect(posx, 300, 10, 50);
      ctx.fillStyle = "#2256f5";
      ctx.fillRect(posx, 300, 10, 25);
      posx = posx + VELOCIDAD;
    }else{
      img.style.display = "block";
      img.style.margin = "auto";
      img.style.marginTop = "30px";
      document.getElementById("text").innerText = "Bienvenido a la página web";
      cvs.style.display = "none";
    }

    //Dibujo del texto
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.font = "bold 30px sans-serif";
    ctx.fillText('CARGANDO...', 230, 335);
    ctx.rect(0, 300, 450, 50);
    ctx.stroke();


  }

    anim();

});

}
