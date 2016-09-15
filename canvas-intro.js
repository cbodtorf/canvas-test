window.addEventListener('load', function() {

  var superRect = document.getElementById('canvas-one'),
      ctx = superRect.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.lineTo(300,100);
  ctx.lineTo(300,200);
  ctx.lineTo(100,200);
  // ctx.lineTo(100,100);   *** or closePath() *** or fill()

  ctx.closePath();
  ctx.stroke();

  /***************
  * Simplified version
  ***************/
  // ctx.rect(100,100,100,300);
  // ctx.fill();

  /***************
  * Super Simplified version
  * does not need begin or close Path
  ***************/
  // ctx.strokeRect(100,100,100,300);
  // ctx.fillRect(100,100,100,300);

});


/*****************************
   Canvas Coordinate System
   0,0
   -------------------------
   |   x-axis -------->
   |
   | y-axis
   | |
   | |
   | |
   | v
   |
   |

   x and y move positive right and down
******************************/
