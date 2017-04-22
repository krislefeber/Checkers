import { GameBoard }from './GameBoard';
export { Pawn } from './Pawn';
export { King } from './King';
export abstract class CheckerPiece {
  _x: number;
  _y: number;
  constructor(x, y) {
    this.init(x,y);
  }
  init(x, y) {
    this._x = x;
    this._y = y;
  }
  move(x, y) {
    x += x;
    y += y;
  }
  set x(delta) {
    if (Math.abs(delta) == 1 && this.x + delta >= 0 && this.x + delta < GameBoard.BOARD_SIZE) {
      this._x += delta;
    } else {
      throw new Error("Invalid move")
    }

  }
  get x() {
    return this._x;
  }
  set y(delta) {
    if (Math.abs(delta) === 1 && this.y + delta >= 0 && this.y + delta < GameBoard.BOARD_SIZE) {
      this._y += delta;
    } else {
      throw new Error("Invalid move")
    }
  }
}
