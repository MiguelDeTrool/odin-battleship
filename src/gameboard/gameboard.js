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
    this.#fillSquares(origin, length, orientation, this.#currentShipID);
    this.#currentShipID++;
  }

  hasShip(coor) {
    return this.#grid[coor[0]][coor[1]].hasShip;
  }

  #fillSquares(origin, length, orientation, identifier) {
    // orientation 0 for horizontal, 1 for vertical
    if (orientation === 0) {
      for (let i = origin[0]; i < origin[0] + length; i++) {
        this.#grid[i][origin[1]].hasShip = true;
      }
    } else {
      for (let i = origin[1]; i < origin[1] + length; i++) {
        this.#grid[origin[0]][i].hasShip = true;
      }
    }
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
