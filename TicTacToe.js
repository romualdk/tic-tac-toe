/**
 * https://www.ntu.edu.sg/home/ehchua/programming/java/JavaGame_TicTacToe.html
 */
const EMPTY = 0
const CROSS = 1
const NOUGHT = 2

const PLAYING = 0
const DRAW = 1
const CROSS_WON = 2
const NOUGHT_WON = 3

const ROWS = 3
const COLS = 3

class TicTacToe {
  constructor () {
    this.initGame()
  }

  initGame () {
    this.board = new Array(ROWS * COLS).fill(EMPTY)
    this.currentState = PLAYING
    this.currentPlayer = CROSS
  }

  cellId (x, y) {
    return x + y * COLS
  }

  nextTurn (x, y) {
    if (this.isFinished) {
      return false
    }

    if (!this.isOnBoard(x, y)) {
      return false
    }

    const cell = this.cellId(x, y)

    if (this.board[cell] !== EMPTY) {
      return false
    }

    this.board[cell] = this.currentPlayer

    if (this.checkWin(this.currentPlayer)) {
      this.currentState = this.currentPlayer === CROSS ? CROSS_WON : NOUGHT_WON
      return true
    }

    if (this.noMoreTurns()) {
      this.currentState = DRAW
      return true
    }

    this.currentPlayer = this.currentPlayer === CROSS ? NOUGHT : CROSS
    return true
  }

  checkWin (player) {
    const horizontal = [0, 3, 6].map(i => { return [i, i + 1, i + 2] })
    const vertical = [0, 1, 2].map(i => { return [i, i + 3, i + 6] })
    const diagonal = [[0, 4, 8], [2, 4, 6]]

    const allwins = [].concat(horizontal).concat(vertical).concat(diagonal)
    const board = this.board

    let res = allwins.some(indices => {
      return board[indices[0]] === player && board[indices[1]] === player && board[indices[2]] === player
    })

    return res
  }

  isOnBoard (x, y) {
    return x >= 0 && x < ROWS && y >= 0 && y < COLS
  }

  isFinished () {
    return this.currentState !== PLAYING
  }

  isDraw () {
    return this.currentState === DRAW
  }

  noMoreTurns () {
    return this.board.map((v) => { return v === EMPTY ? 1 : 0 }).reduce((a, b) => a + b) === 0
  }

  getWinner () {
    return this.currentState === CROSS_WON ? CROSS : this.currentState === NOUGHT_WON ? NOUGHT : null
  }

  getFieldValue (x, y) {
    const id = this.cellId(x, y)
    return this.board[id]
  }

  getCurrentPlayerSymbol () {
    return this.getSymbol(this.currentPlayer)
  }

  getSymbol (value) {
    return value === CROSS ? 'x' : value === NOUGHT ? 'o' : ''
  }

  log () {
    const b = this.board
    console.log(this.currentState)
    console.log(b[0], b[1], b[2])
    console.log(b[3], b[4], b[5])
    console.log(b[6], b[7], b[8])
  }
}

export default TicTacToe
