import { Gameboard } from "../gameboard/gameboard.js";

class Player {
  static #boardSize = 10;

  constructor(name, isAI) {
    this.name = name.toString();
    this.isAI = !!isAI;
    this.board = new Gameboard(Player.#boardSize);
  }

  playMove(gameboard, coor) {
    if (this.isAI === true) {
      let x = Math.floor(Math.random() * Player.#boardSize);
      let y = Math.floor(Math.random() * Player.#boardSize);
      coor = [x, y];
    }
    try {
      gameboard.receiveAttack(coor);
    } catch (e) {
      return e;
    }
  }
}

export { Player };
