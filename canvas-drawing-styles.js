window.onload = function() {
  var c = document.getElementById("canvas-three"),
      ctx = c.getContext("2d");

  // ctx.fillStyle = "yellow"; // can use rgba or hex
  // ctx.strokeStyle = "red";
  // ctx.lineWidth = 10;
  //
  //
  // ctx.beginPath();
  // ctx.rect(100, 100, 100, 100);
  // ctx.stroke();
  //
  // ctx.beginPath();
  // ctx.rect(250, 100, 100, 100);
  // ctx.fill();
  //
  // ctx.beginPath();
  // ctx.rect(100, 250, 100, 100);
  // ctx.stroke();
  // ctx.fill();
  //
  // ctx.beginPath();
  // ctx.rect(250, 250, 100, 100);
  // ctx.fill();
  // ctx.stroke();

  ctx.lineCap = "butt"; // default = "butt" -> or "square", "round"
  ctx.lineJoin = "miter" // default = "miter" -> "bevel", "round"
  ctx.miterLimit = 15 // default = 10

  ctx.lineWidth = 20;
  ctx.strokeStyle = "#999999";
  draw();

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#ff0000";
  draw();

  function draw() {
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(200, 200, 100, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(390, 500);
    ctx.lineTo(400, 400);
    ctx.lineTo(410, 500);
    ctx.stroke();
  }

}
