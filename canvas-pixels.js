window.addEventListener('load', function() {
  var c = document.getElementById("canvas-nine"),
      ctx = c.getContext("2d");

  /************************
  * To get pixel data:
  * getImageData(x, y, w, h)
  * imageData.data = [r,g,b,a, ...]
  *************************/
  /************************
  * 2D grid:
  * index = (y * width + x)
  *
  * for imageData:
  * index = (y * width + x) * 4
  * returns red channel (can add to get other channels)
  *************************/

  // ctx.fillStyle = "yellow"
  // ctx.fillRect(0,0,300, 300)
  //
  // var imageData = ctx.getImageData(0, 0, 600, 600),
  //     x = 100,
  //     y = 100,
  //     index = (y * imageData.width + x) * 4;
  //
  //     console.log("red: " + imageData.data[index]);
  //     console.log("green: " + imageData.data[index + 1]);
  //     console.log("blue: " + imageData.data[index + 2]);
  //     console.log("alpha: " + imageData.data[index + 3]);

  /************************
  * using a nested for loop (x,y) to set image data
  * should equal red square
  *************************/
  var imgData = ctx.getImageData(0,0,600,600)
  for (var x = 100; x < 200; x++) {
    for (var y = 100; y < 200; y++) {
      var idx = (y * imgData.width + x) * 4
      imgData.data[idx] = 255
      imgData.data[idx + 3] = 255
    }
  }
  ctx.fillRect(0,0,600,600)
  /************************
  * after setting imageData, we must PUT it on the canvas w/
  * ctx.putImageData
  *************************/
  // there are four extra paramaters to define which pixels should be displayed
  // ctx.putImageData(imgData, 0, 0)

  // these define the location/size of square that we made in nested for loop
  ctx.putImageData(imgData, 0, 0, 100,100,100,100)

  /************************
  * putImageData:
  * - No blending, alpha, etc.
  * - No transforms while putting data
  * - Transparent area of the image data become transparent areas in the canvas
  *************************/

  /************************
  * ImageData
  * - Very CPU intensive
  * - Only get or put the amount of data that you really need
  *************************/
  ctx.fillStyle = "purple"
  ctx.fillRect(0,0,600,600)

  var pixel = getPixel(ctx, 100, 100)
  console.log("red: " + pixel.r,
              "green: " + pixel.g,
              "blue: " + pixel.b,
              "alpha: " + pixel.a);

  function getPixel(ctx, x, y) {
    var imageData = ctx.getImageData(x,y,1,1)
    return {
      r: imageData.data[0],
      g: imageData.data[1],
      b: imageData.data[2],
      a: imageData.data[3],
    }
  }

  /************************
  * Starfield (only settting/putting random white pixels)
  *************************/
  ctx.fillStyle = "black"
  ctx.fillRect(0,0,600,600)

  for(var i = 0; i < 1000; i++){
    var x = Math.round(Math.random() * 600)
    var y = Math.round(Math.random() * 600)
    setPixel(ctx, x, y, 255, 255, 255, 255)
  }

  function setPixel(ctx, x, y, r, g, b, a) {
    var imageData = ctx.createImageData(1,1)
    imageData.data[0] = r
    imageData.data[1] = g
    imageData.data[2] = b
    imageData.data[3] = a

    ctx.putImageData(imageData, x, y)
  }
  /************************
  * imageData is powerful, so use it sparringly
  * often times its much better to draw to canvas w/ other methods
  *************************/

})
