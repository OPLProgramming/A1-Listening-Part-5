const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let ferramenta = "lapis";
let clicado = false;
let x = 0;
let y = 0;

function ajustarCanvas() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
}

window.addEventListener("load", ajustarCanvas);
window.addEventListener("resize", ajustarCanvas);

function setFerramenta(tipo) {
  ferramenta = tipo;
}

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

canvas.addEventListener("mousedown", (e) => {
  clicado = true;
  const pos = getMousePos(e);
  x = pos.x;
  y = pos.y;
});

canvas.addEventListener("mouseup", () => {
  clicado = false;
});

canvas.addEventListener("mousemove", (e) => {
  if (!clicado) return;

  const pos = getMousePos(e);
  const x2 = pos.x;
  const y2 = pos.y;

  if (ferramenta === "lapis") {
    ctx.strokeStyle = document.getElementById("cor").value;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  if (ferramenta === "borracha") {
    ctx.clearRect(x2 - 10, y2 - 10, 20, 20);
  }

  x = x2;
  y = y2;
});
