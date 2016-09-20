window.addEventListener('load', function() {
  var c = document.getElementById("canvas-eight"),
      ctx = c.getContext("2d");


  ctx.save() // saves ctx axis position at start 0,0
  ctx.scale(.4,.5)

  // double for loop creates a grid/matrix
  for(var j = 0; j < 10; j++){
    ctx.save()
    for(var i = 0; i < 10; i++){
      ctx.fillRect(0,0,30,30)
      ctx.translate(40,0)
    }
    ctx.restore()
    ctx.translate(0,40)
  }

  // restores state ignoring scale and translations
  ctx.restore()
  ctx.fillStyle = 'red'
  ctx.translate(300,0)
  ctx.rotate(Math.PI / 4)
  ctx.fillRect(0,0,100,100)

  // print along a circle w/out mathy stuff
  var num = 20
  ctx.translate(200,200)
  for(var p = 0; p < num; p++){
    ctx.rotate(Math.PI * 2 / num)
    ctx.beginPath()
    ctx.arc(100,0,10,0, Math.PI * 2)
    ctx.fillStyle = "orange"
    ctx.fill()
  }
})
