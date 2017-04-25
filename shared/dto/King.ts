import { GamePiece } from './GamePiece';
export class King extends GamePiece {
  isValidMove(xDelta:number, yDelta:number) :boolean {
   return Math.abs(xDelta) === 1 && Math.abs(yDelta) === 1;
  }
}
