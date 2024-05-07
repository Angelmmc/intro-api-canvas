const canvasSquare = document.getElementById("canvasSquare");
const canvasTriangle = document.getElementById("canvasTriangle");
const canvasFeather = document.getElementById("canvasFeather");
const canvasLines = document.getElementById("canvasLines");

drawSquare();
drawTriangle();
drawFeather();
drawLines();

function drawSquare() {
    const ctx = canvasSquare.getContext("2d");
    if (canvasSquare.getContext) {
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
}

function drawTriangle() {
    if (canvasTriangle.getContext) {
        const ctx = canvasTriangle.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(25, 100);
        ctx.lineTo(125, 100);
        ctx.lineTo(75, 15);
        ctx.fill();
    }
}

function drawFeather() {
    if (canvasFeather.getContext) {
      const ctx = canvasFeather.getContext("2d");
  
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
      ctx.stroke();
    }
  }

  function drawLines() {
    if (canvasLines.getContext) {
      const ctx = canvasLines.getContext("2d");
  
      // Triángulo relleno
      ctx.beginPath();
      ctx.moveTo(25, 25);
      ctx.lineTo(105, 25);
      ctx.lineTo(25, 105);
      ctx.fill();
  
      // Triángulo contorneado
      ctx.beginPath();
      ctx.moveTo(125, 125);
      ctx.lineTo(125, 45);
      ctx.lineTo(45, 125);
      ctx.closePath();
      ctx.stroke();
    }
  }
  
  

