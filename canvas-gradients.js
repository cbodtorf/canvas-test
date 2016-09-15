window.addEventListener('load', function() {
  var c = document.getElementById("canvas-four"),
      ctx = c.getContext("2d");

  var gradient =
  ctx.createLinearGradient(100, 100, 100, 200); // vertical gradient
  // ctx.createLinearGradient(100, 100, 200, 100) // horizontal gradient
  // ctx.createLinearGradient(100, 100, 200, 200) // diagonal gradient

  gradient.addColorStop(0, "red")
  gradient.addColorStop(0.5, "green")
  gradient.addColorStop(1, "blue")

  ctx.fillStyle = gradient;
  ctx.fillRect(100, 100, 100, 100)

  var gradRad = ctx.createRadialGradient(300, 300, 0, 300, 300, 50);
  // (x1,y1,r1,x2,y2,r2)

  gradRad.addColorStop(0, "lavender");
  gradRad.addColorStop(0.4, "pink");
  gradRad.addColorStop(1, "rgba(40,200,110,0.3)");

  ctx.fillStyle = gradRad;
  ctx.beginPath();
  ctx.arc(300,300,50,0, Math.PI * 2, false);
  ctx.fill();;

})
