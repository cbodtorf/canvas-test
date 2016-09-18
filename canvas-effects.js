window.addEventListener('load', function() {
  var c = document.getElementById("canvas-seven"),
      ctx = c.getContext("2d");

  // ctx.globalAlpha = 0.4
  ctx.shadowColor = "rgba(0,0,0,0.5)"

  document.body.addEventListener("mousemove", function(event){
    ctx.clearRect(0,0,600,600)
    var dx = 300 - event.clientX
    var dy = 300 - event.clientY
    var distance = Math.sqrt(dx * dx * dy * dy)

    ctx.shadowBlur = distance * .005
    ctx.shadowOffsetX = dx * 0.5
    ctx.shadowOffsetY = dy * 0.5
    ctx.fillStyle = "red"
    ctx.fillRect(250, 250, 100, 100)
  })


  ctx.globalAlpha = 1

  ctx.globalCompositeOperation = "screen"

  ctx.fillStyle = "blue"
  ctx.fillRect(200, 50, 100, 400)

  /************************
  * globalCompositeOperation == blending mode
  *
  * (source-over, source-in, source-out, source-atop,
  *  destination-over, destination-in, destination-out, destination-atop,
  *  lighter, copy, xor, multiply, screen, overlay, lighten, darken,
  *  color-dodge, color-burn, hard-light, soft-light, difference, exclusion,
  *  hue, saturation, color, luminosity)
  **************************/

  /************************
  * for examples and playground!
  * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  *************************/
})
