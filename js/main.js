/* global createCanvas, resizeCanvas, cursor */
function preload () {
  window.setupMenuLogic()
}

function setup () {
  window.canvas = createCanvas(window.innerWidth, window.innerHeight)
}

function draw () {
  const currentInput = window.settings.selectedInput
  const inputObj = window.inputs[currentInput]
  const currentBrush = window.settings.selectedBrush
  const currentCursor = window.brushCursors[currentBrush]
  if (currentInput == 'mouse') { // disable cursor customization when input is not mouse
    cursor(currentCursor.img, currentCursor.x, currentCursor.y)
  } else {
    cursor('auto')
  }
  inputObj.update()
  if (inputObj.condition() && !window.dragging) {
    const brushObj = window.brushes[currentBrush]
    brushObj.draw()
  }
}

function windowResized () {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
