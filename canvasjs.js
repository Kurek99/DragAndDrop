var pixelSize = 30;
interact('.rainbow-pixel-canvas')
  .draggable({
    origin: 'self',
    modifiers: [
      interact.modifiers.snap({
        targets: [
          interact.snappers.grid({ x: pixelSize, y: pixelSize })
        ]
      })
    ],
    listeners: {
      move: function (event) {
        var context = event.target.getContext('2d')
        var dragAngle = 180 * Math.atan2(event.dx, event.dy) / Math.PI
        context.fillStyle =
          'hsl(' + dragAngle + ', 86%, ' + (30 + Math.min(event.speed / 1000, 1) * 50) + '%)'
        context.fillRect(
          event.pageX - pixelSize / 2,
          event.pageY - pixelSize / 2,
          pixelSize,
          pixelSize
        )
      }
    }
  })
  .on('doubletap', function (event) {
    var context = event.target.getContext('2d')

    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    resizeCanvases()
  })

function resizeCanvases () {
  [].forEach.call(document.querySelectorAll('.rainbow-pixel-canvas'), function (
    canvas
  ) {
    var rect = canvas.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height
  })
}
resizeCanvases()
