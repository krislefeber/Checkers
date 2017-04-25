import { Player } from './Player';
import { GamePiece, Pawn, King } from './GamePiece';
export class GameBoard {

  public static readonly BOARD_SIZE = 8;
  private board: Array<GamePiece[]>;
  constructor() {
    this.board = [];
    for (let i = 0; i < GameBoard.BOARD_SIZE; i++)
      this.board.push(new Array<GamePiece>(8));
  }
  setPiece(piece: GamePiece, x, y): boolean {
    if (this.withinBounds(x, y) && this.board[x][y]._color != piece._color) {
      this.board[x][y] = piece;
      return true;
    }
    return false;
  }
  movePiece(startX: number, startY: number, deltaX: number, deltaY: number): boolean {
    if (this.withinBounds(startX, startY) && this.withinBounds(startX + deltaX, startY + deltaY)) {
      let piece = this.board[startX][startY];
      if (piece.isValidMove(deltaX, deltaY)) { 
        this.board[startX][startY] = undefined;
        this.board[startX + deltaX][startY + deltaY] = piece;
      }
    }
  }

  withinBounds(x, y) {
    return x >= 0 && y >= 0 && x < GameBoard.BOARD_SIZE && y < GameBoard.BOARD_SIZE;
  }
}
