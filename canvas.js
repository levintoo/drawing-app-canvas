window.addEventListener('load', () =>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");


    // canvas resizie
    resize();
  
    ctx.strokeStyle = "blue";
    ctx.strokeRect(50,50,200,200);
    ctx.strokeStyle = "red";
    ctx.strokeRect(100,100,200,200);
});
window.addEventListener('resize', resize)

function resize(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}





