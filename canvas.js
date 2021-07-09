window.addEventListener('load', () =>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");


    // canvas resizie
    resize();

});

window.addEventListener('resize', resize)



function resize(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}