import { Gameboard } from "../gameboard/gameboard.js";

class Player {
  static #boardSize = 10;

  constructor(name, isAI) {
    this.name = name.toString();
    this.isAI = !!isAI;
    this.board = new Gameboard(Player.#boardSize);
  }

  playMove(enemyBoard, coor) {
    if (this.isAI === true) {
      while (true) {
        let x = Math.floor(Math.random() * Player.#boardSize);
        let y = Math.floor(Math.random() * Player.#boardSize);
        coor = [x, y];
        if (enemyBoard.squareInfo(coor).hit === false) {
          enemyBoard.receiveAttack(coor);
        }
        break;
      }
    }

    try {
      enemyBoard.receiveAttack(coor);
    } catch (e) {
      return e;
    }
  }
}

export { Player };
