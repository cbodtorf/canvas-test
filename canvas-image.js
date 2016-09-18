window.addEventListener('load', function() {
  var c = document.getElementById("canvas-six"),
      ctx = c.getContext("2d"),
      image = document.createElement('IMG'),
      sprite = document.createElement('IMG'),
      x = 0,
      y = 0;



  /*********************
  * simplest version
  * ctx.drawImage(image, x, y)
  **********************/
  // image.src = "http://www.bit-101.com/blog/wp-content/uploads/2012/01/Yeah-well-you-know-thats-just-like-your-opinion-man.jpg"
  // image.addEventListener("load", function() {
  //   ctx.drawImage(image, 0, 0)
  // })
  /*********************
  * second version
  * ctx.drawImage(image, destx, desty, destWidth, destHeight)
  **********************/

  /*********************
  * complex version
  * would be great for spritesheets
  * ctx.drawImage(
      image, srcx, srcy, srcWidth, srcHeight,
      destx, desty, destWidth, destHeight)
  **********************/
  sprite.src = "http://bit-101.com/horse.jpg"
  sprite.addEventListener("load", function() {
    setInterval(animate, 1000/15)
  })
  
  function animate() {
    var w = 186,
        h = 135;
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.drawImage(sprite, w * x, h * y, w, h, 0, 0, w, h)

    x++;
    if(x>3) {
      x = 0;
      y++;
    }
    if(y>3) {
      y = 0;
    }
  }


  /***********************
  * How to save and img to url data string
  *************************/
  // ctx.beginPath()
  // for(var i = 0; i < 100; i++) {
  //   ctx.moveTo((Math.random() * 200) +200, (Math.random() * 200) +200)
  //   ctx.lineTo((Math.random() * 200) +200, (Math.random() * 200) +200)
  // }
  // ctx.stroke();
  //
  // var imageToGrab = document.createElement("img")
  //  /***********************
  //  * by default its a image/png
  //  * @param image type
  //  * @param jpg supports compression. value b/w 0-1.
  //  *************************/
  // imageToGrab.src = c.toDataURL("image/jpg", .5)
  // document.body.appendChild(imageToGrab)

})
