window.addEventListener('load', function() {
  var c = document.getElementById("canvas-five"),
      ctx = c.getContext("2d");

  ctx.fillStyle = "#cccccc"
  ctx.fillRect(0,0, c.width, c.height)
  ctx.fillStyle = "black"

  ctx.font = "italic 50px impact" //default is black 10px san serif
  ctx.fillText('Hello, Canvas', 100, 100)

  ctx.fillStyle = "lightslategrey"
  ctx.font = "bold 30px arial" //default is black 10px san serif
  ctx.textAlign = "center"
  ctx.fillText('This is me, Kelb', c.width / 2, 200)
  ctx.strokeText('This is me, Kelb', c.width / 2, 200)


  /***************
  * Can set ctx.textBaseline
  * top, hanging, middle, alphabetic (default), ideographic, bottom
  ***************/
  ctx.textBaseline = "hanging"
  ctx.textAlign = "center"
  ctx.fillStyle = "purple"
  ctx.font = "30px times" //default is black 10px san serif
  ctx.fillText('Draw me like one of your french girls', c.width / 2, 300)


  /***************
  * ctx.measureText(str)
  * returns text object
  * experimental tech *** not super useful (really only works with width)
  ***************/
  ctx.fillStyle = "#c539cf"
  ctx.textBaseline = "alphabetic"
  ctx.font = "50px Arial"
  ctx.fillText('Hello, Japan', 200, 450)
  var textMetrics = ctx.measureText("Hello, Japan"),
    width = textMetrics.width;

    ctx.strokeRect(60, 450, width, -50);
})
