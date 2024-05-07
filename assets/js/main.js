const canvasSquare = document.getElementById("canvasSquare");
const canvasTriangle = document.getElementById("canvasTriangle");


drawSquare();
drawTriangle();

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
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
    }
}

