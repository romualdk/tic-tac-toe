import TicTacToe from './TicTacToe.js'

const ttt = new TicTacToe()

ttt.nextTurn(0, 0)
ttt.log()
ttt.nextTurn(1, 0)
ttt.log()
ttt.nextTurn(2, 0)
ttt.log()
ttt.nextTurn(1, 1)
ttt.log()
ttt.nextTurn(0, 1)
ttt.log()
ttt.nextTurn(1, 2)
ttt.log()

function min (a, b) {
  return a < b ? a : b
}

function resize () {
  const board = document.getElementsByClassName('content')[0].children[0]
  const width = board.clientWidth
  const height = board.clientHeight
  const margin = 16

  const table = document.getElementsByClassName('board')[0]
  const size = min(width, height) - (margin * 2)

  table.style.width = size + 'px'
  table.style.height = size + 'px'
}

document.body.onresize = resize
resize()
