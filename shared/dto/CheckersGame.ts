import { GameBoard } from './GameBoard';
import { Player } from './Player';
export class CheckersGame {
  player:Player
  opponent:Player;
  board:GameBoard;

  initBoard() {
    this.board = new GameBoard();
    console.log("board created:", this.board);
    if (this.player.checkerPieces === undefined) {
      this.player.checkerPieces = [];
      let j = 0;
      for (let i = 0; i < GameBoard.BOARD_SIZE; i++) {
        let offset = 0;
        if (i % 2 == 1) {
          offset = 1;
        }
        for (let j = 0; j < 3; j += 2) {
          this.board.setPiece(new Pawn(GameBoard.COLOR_1), i, j);
        }
      }
    }
    if (this.opponent.checkerPieces === undefined) {
      let offset = 0;
      if (i % 2 == 1) {
        offset = 1;
      }
      this.opponent.checkerPieces = [];
      let j = 0;
      for (let i = 0; i < GameBoard.BOARD_SIZE; i++) {
        for (let j = 0; j < 3; j += 2) {
          this.board[i][j] = new Pawn(GameBoard.COLOR_2);
        }
      }
    }
  }
}
