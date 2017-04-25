import { GameBoard }from './GameBoard';
export { Pawn } from './Pawn';
export { King } from './King';
export abstract class GamePiece {
  _color: string;
  constructor(color) {
    this.init(color);
  }
  init(color) {
    this._color = color;
  }
  abstract isValidMove(xDelta: number, yDelta: number): boolean;
}
