canvas = document.getElementById("myCanvas")
turtle = canvas.getContext("2d")
ctx = canvas.getContext('2d');
backgroundImage = new Image();
verificar = "lapis"

function lapis(){
    verificar = "lapis"
}
function borracha(){
    verificar = "borracha"
}



// backgroundImage.onload = function() {
//   ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
// };

// backgroundImage.src = "a1_listening.png";



clicado = false



canvas.addEventListener("mousedown", desenharCirculo)

function desenharCirculo(a) {
    clicado = true
    
    x = a.clientX - canvas.offsetLeft
    y = a.clientY - canvas.offsetTop
    console.log("x: " + x)
    console.log("y: " + y)
    // if(verificar=="borracha"){
    //     turtle.clearRect(x,y,5,5)
    // }
    // turtle.beginPath()
    // turtle.arc(x, y, 20, 0, 2 * Math.PI)
    // turtle.stroke()
}

canvas.addEventListener("mousemove", desenhar)

function desenhar(a) {
    x2 = a.clientX - canvas.offsetLeft
    y2 = a.clientY - canvas.offsetTop
    cor = document.getElementById("cor").value
    turtle.globalAlpha = 0.3

    ctx.strokeStyle=cor
    ctx.lineWidth=5
    if (clicado == true && verificar=="lapis") {
        turtle.beginPath()
        turtle.moveTo(x, y)
        turtle.lineTo(x2, y2)
        turtle.stroke()
    }
    // if(clicado == true && verificar=="borracha"){
    //     turtle.clearRect(x,y,20,20)
    // }
     x=x2
     y=y2
}

canvas.addEventListener("mouseup", parar)

function parar() {
    clicado = false
}
// ctx.beginPath();
// ctx.moveTo(xinicial,yinicial)
// ctx.lineTo(xfinal,yfinal)
// ctx.stroke()




function part2(){
    // window.confirm("Você não poderá voltar aqui. Tenha certeza de tirar uma foto antes de prosseguir!")
    if (confirm("Você não poderá voltar aqui. Tenha certeza de tirar uma foto antes de prosseguir! \nSó clique em OK quando já tiver tirado uma foto e registrado")) {
     window.location="part2.html"
  } else {
   
  }
   
}