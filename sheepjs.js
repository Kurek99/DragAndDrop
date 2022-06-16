const position = { x: 0, y: 0 }

interact('.draggable').draggable({
  listeners: {
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

interact('.dropzone').dropzone({
  accept: '.draggable',
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    draggableElement.style.backgroundImage = "url('sheep1.png')"
  },
  ondragleave: function (event) {
    event.relatedTarget.style.backgroundImage = "url('sheep.png')"
  },
})
