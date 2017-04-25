import { GamePiece } from './GamePiece';
export class Pawn extends GamePiece {
  isValidMove(xDelta:number, yDelta:number) {
    return xDelta === 1 || xDelta === -1 && yDelta === 1;
  }
}
