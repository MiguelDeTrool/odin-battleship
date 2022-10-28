import { Ship } from "../ship/ship.js";

class Gameboard {
  constructor(size) {
    this.#createGrid(size);
  }

  #grid;
  #ships = new Array();
  #currentShipID = 0;

  #createGrid(size) {
    this.#grid = new Array(size);

    // Loop through first dimension to create 2D array
    for (let i = 0; i < size; i++) {
      this.#grid[i] = new Array(size);
      // Loop through second arrat to initialize each array item with a Square
      for (let j = 0; j < size; j++) {
        this.#grid[i][j] = new Square(false, null, false);
      }
    }
  }

  placeShip(origin, length, orientation) {
    this.#ships.push(new Ship(length));
    // orientation 0 for horizontal, 1 for vertical
    this.#fillSquares(origin, length, orientation, this.#currentShipID);
    this.#currentShipID++;
  }

  squareInfo(coor) {
    return this.#grid[coor[0]][coor[1]];
  }

  #fillSquares(origin, length, orientation, identifier) {
    let x = origin[0];
    let y = origin[1];
    if (orientation === 0) {
      for (let i = origin[0]; i < origin[0] + length; i++) {
        this.#grid[i][y].hasShip = true;
        this.#grid[i][y].shipID = identifier;
      }
    } else {
      for (let i = origin[1]; i < origin[1] + length; i++) {
        this.#grid[x][i].hasShip = true;
        this.#grid[x][i].shipID = identifier;
      }
    }
  }

  isShipSunk(identifier) {
    return this.#ships[identifier].isSunk();
  }

  receiveAttack(coor) {
    let x = coor[0];
    let y = coor[1];

    if (this.#grid[x][y].hit === false) {
      this.#grid[x][y].hit = true;
    } else {
      throw new Error("Already hit");
    }

    if (this.#grid[x][y].hasShip === true) {
      let ID = this.#grid[x][y].shipID;
      this.#ships[ID].hit();
    }
  }

  areAllShipsSunk() {
    const result = this.#ships.reduce(
      (prev, currShip) => prev && currShip.isSunk(),
      true
    );
    return result;
  }
}

class Square {
  constructor(hasShip, shipID, hit) {
    this.hasShip = hasShip;
    this.shipID = shipID;
    this.hit = hit;
  }
}

export { Gameboard };
