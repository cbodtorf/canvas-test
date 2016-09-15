window.onload = function() {
  var c = document.getElementById("canvas-two"),
      ctx = c.getContext("2d")

  /***********************
  * Simple sin wave ( actually inefficient use of lines)
  ***********************/

  // ctx.beginPath()
  // ctx.moveTo(0, 300)
  //
  // for(var x=1; x <= 600; x++) {
  //   var y = 300 + Math.sin(x * 0.07) * 100;
  //   ctx.lineTo(x, y)
  // }
  // ctx.stroke();


  /*******************
  * ctx.quadraticCurveTo(cx, cy, x, y)
  *
  *        control point (cx, cy)
  *    　             •
  *               。      。
  *            。            。
  * current　。      　         。　end
  * cursor •                    • point
  * position                      (x,y)
  *
  *******************/
  /*******************
  * ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x, y)
  *
  * Just adds a second control point
  *      (cx1,cy1)　　 (x,y)
  *       •　　　　　　•
  *     。　　。　　。
  *   •　　　　　•
  * current       (cx2,cy2)
  *
  *******************/

  var p0 = {
    x: Math.random() * 600,
    y: Math.random() * 600
  },
    p1 = {
    x: Math.random() * 600,
    y: Math.random() * 600
  },
    p2 = {
      x: Math.random() * 600,
      y: Math.random() * 600
  },
    p3 = {
      x: Math.random() * 600,
      y: Math.random() * 600
  }

  ctx.beginPath()
  ctx.moveTo(p0.x, p0.y)
  // ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y)
  ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
  ctx.stroke()

  drawPoint(p0)
  drawPoint(p1)
  drawPoint(p2)
  drawPoint(p3)

  function drawPoint(p) {
    ctx.fillRect(p.x - 4, p.y - 4, 8, 8)
  }

  /*******************
  * ctx.arc(x, y, radius, startAngle, endAngle)
  * radian = ~57deg
  * 360deg = 2pi radians
  *******************/

  /******************
  * circle
  ******************/
  // ctx.beginPath()
  // ctx.arc(300, 300, 100, 0, Math.PI * 2)
  // ctx.stroke()

  /******************
  * arc
  ******************/
  // ctx.beginPath()
  // ctx.arc(300, 300, 100, 0, 2, true) // <- anti-clockwise is last param (optional defaults to false)
  // ctx.stroke()


}
