window.addEventListener('load', function() {
  var c = document.getElementById("canvas-eleven"),
      ctx = c.getContext("2d"),
      rect = c.getBoundingClientRect(),
      angle = 0,
      xpos = 0;


  /***********************
  * Animation:
  * Change over time:
  * [position, scale, rotation, color/texture/stroke, opacity, shape]
  ***********************/


  /***********************
  * setTimeout && setInterval
  * old ways of dealing rendering w/ screen refreshing
  * works, but doesn't actually sync w/ screen refshes
  * new method is requestAnimationFrame
  ***********************/
  // function draw(x){
  //   ctx.clearRect(0,0,600,600)
  //   ctx.beginPath()
  //   ctx.arc(x, 300, 20, 0, Math.PI * 2)
  //   ctx.fill()
  // }
  //
  // setInterval(function(){
  //   draw(xpos)
  //   xpos++
  // }, 1000/60)
  // 60 frames per second

  /***********************
  * requestAnimationFrame
  * code will run one time for each screen refresh
  * should get around 60fps
  ***********************/
  // draw()
  //
  // function draw(){
  //   ctx.clearRect(0,0,600,600)
  //   ctx.beginPath()
  //   ctx.arc(xpos, 300, 20, 0, Math.PI * 2)
  //   ctx.fill()
  //   xpos++
  //   requestAnimationFrame(draw)
  // }

  /***********************
  * requestAnimationFrame && setInterval
  * useful if reducing fps to say 40
  ***********************/
  setInterval(function(){
    requestAnimationFrame(draw)
  }, 1000/40)

  function draw(){
    ctx.clearRect(0,0,600,600)
    ctx.save()
    ctx.translate(300, 300)
    var scale = Math.sin(angle)
    ctx.scale(scale, scale)
    ctx.rotate(angle)
    ctx.fillRect(-50, -50, 100, 100)
    angle += 0.1
    ctx.restore()
  }


})
