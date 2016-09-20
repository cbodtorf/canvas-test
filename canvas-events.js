window.addEventListener('load', function() {
  var c = document.getElementById("canvas-ten"),
      ctx = c.getContext("2d"),
      rect = c.getBoundingClientRect(),
      mouseX,
      MouseY,
      x = 400,
      y = 400,
      btn = {
        x: 100,
        y: 5,
        w: 100,
        h: 50,
        selected: false
      };

  drawButton()

  /************************
  * traversing the dom to describe click events
  *************************/
  var box = document.querySelector(".ten")
  var clickMsg = document.createElement("SPAN")
  clickMsg.textContent =
  "Click to Stamp! Press button to Draw! Click left and right arrows to move circle. "
  box.insertBefore(clickMsg, box.firstChild)


  /************************
  * Circle Keyboard Events
  *************************/
  document.body.addEventListener("keydown", function(e){
    switch(e.keyCode){
      case 37: // left
        x--;
        move()
        break;
      case 39: // right
        x++;
        move()
        break;
    }
  })

  function move() {
    ctx.clearRect(0,350, c.width, 200)
    ctx.beginPath()
    ctx.arc(x,y,20,0,Math.PI*2)
    ctx.fill()
  }
  /************************
  * Basic toggle button
  *************************/
  c.addEventListener("click", function(e){
    rect = c.getBoundingClientRect()
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top
    if(x >= btn.x && x <= btn.x + btn.w && y >= btn.y && y <= btn.y + btn.h) {
      btn.selected = !btn.selected
      drawButton()
    }
  })

  c.addEventListener("mousemove", function(e){
    rect = c.getBoundingClientRect()
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top
    if(x >= btn.x && x <= btn.x + btn.w && y >= btn.y && y <= btn.y + btn.h) {
      c.style.cursor = "pointer"
    } else {
      c.style.cursor = "auto"
    }

  })

  function drawButton() {
    ctx.fillStyle = btn.selected ? "red" : "gray"
    ctx.fillRect(btn.x, btn.y, btn.w, btn.h)
    ctx.fillStyle = "black"
    ctx.textAlign = "center"
    ctx.font = "20px arial"
    if (btn.selected) {
      ctx.fillText('on', btn.x + btn.w/2, btn.y + btn.h/2)
    } else {
      ctx.fillText('off', btn.x + btn.w/2, btn.y + btn.h/2)
    }
  }


  /************************
  * Basic Drawing Feature
  *************************/
  c.addEventListener("click", stamp)
  c.addEventListener("mousedown", onMouseDown)

  function onMouseDown(e){
    if(btn.selected) {

    rect = c.getBoundingClientRect()
    mouseX = e.clientX - rect.left
    mouseY = e.clientY - rect.top
    c.addEventListener("mousemove", onMouseMove)
    c.removeEventListener("click", stamp)
    document.body.addEventListener("mouseup", onMouseUp)
  } else {
    c.addEventListener("click", stamp)
  }
  }
  function onMouseMove(e){
    rect = c.getBoundingClientRect()
    ctx.beginPath()
    ctx.moveTo(mouseX, mouseY)
    mouseX = e.clientX - rect.left
    mouseY = e.clientY - rect.top
    ctx.lineTo(mouseX, mouseY)
    ctx.stroke()
  }
  function onMouseUp(e){
    c.removeEventListener("mousemove", onMouseMove)
    c.removeEventListener("mouseup", onMouseUp)
  }


  /************************
  * basic click event example [stamps a circle]
  *************************/

  function stamp(e) {
    // getBoundingClientRect compensates for margins and paddings
    // if we think layout will change it should be grabbed each time,
    // otherwise it can be put up at the top.
    var rect = c.getBoundingClientRect();
    ctx.beginPath()
    ctx.arc(e.clientX - rect.left, e.clientY - rect.top, 10, 0, Math.PI * 2)
    ctx.stroke()
  }

})
