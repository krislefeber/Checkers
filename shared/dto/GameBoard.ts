import { Player } from './Player';
import { CheckerPiece, Pawn, King } from './CheckerPiece';
export class GameBoard {
  public static readonly BOARD_SIZE = 8;
  public static readonly COLOR_1 = '#ddd';
  public static readonly COLOR_2 = '#333';
  private player:Player;
  private opponent:Player;

  constructor(player1, player2) {
    this.player = player1;
    this.opponent = player2;
    this.initBoard();
  }

  initBoard() {
    if(this.player.checkerPieces === undefined) {
      this.player.checkerPieces = [];
      let j = 0;
      for(let i = 0; i < GameBoard.BOARD_SIZE; i++) {
        let cp = new Pawn(i, j);
        j+= 2;
        j %= GameBoard.BOARD_SIZE;
      }
    }
  }
}
