window.addEventListener('load', () =>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");


    // canvas resizie
    resize();
  
    // ctx.strokeStyle = "blue";
    // ctx.strokeRect(50,50,200,200);
    // ctx.strokeStyle = "red";
    // ctx.strokeRect(100,100,200,200);

    // ctx.beginPath();
    // ctx.moveTo(100,100);
    // ctx.lineTo(500,100);
    // ctx.lineTo(500,300);
    // ctx.closePath();
    // ctx.stroke();


    let painting = "false";

    function startPosition(){
        painting= "true";
    }
    function finishedPosition(){
        painting= "false";
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);

function draw(e){
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
}

});


// window.addEventListener('resize', resize)

function resize(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}





