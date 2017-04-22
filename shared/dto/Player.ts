import { CheckerPiece } from './CheckerPiece';
export class Player {
  private _name: string;
  private _id: string;
  private _wins:string;
  private _peices:CheckerPiece[];
  constructor(name: string, id?: string) {
    this.name = name;
    if (id) {
      this.id = id;
    }
  }

  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set id(id) {
    this._id = id;
  }
  get id() {
    return this._id;
  }
  set wins(wins) {
    this._wins = wins;
  }
  get wins() {
    return this._wins;
  }
  get checkerPieces() {
    return this._peices;
  }
  set checkerPieces(peices:CheckerPiece[]) {
    this._peices = peices;
  }
}
