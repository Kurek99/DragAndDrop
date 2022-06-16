interact('.tap-target')
.on('tap', function (event) {
  event.currentTarget.classList.toggle('switch-bg')
  event.preventDefault()
})
.on('doubletap', function (event) {
  event.currentTarget.classList.toggle('large')
  event.preventDefault()
})