class Ship {
  constructor(length) {
    this.#setLength(length);
  }

  #length;
  #hits = 0;

  #setLength(num) {
    this.#length = num;
  }

  hit() {
    if (this.isSunk() === false) {
      this.#hits++;
    }
  }

  isSunk() {
    if (this.#hits >= this.#length) {
      return true;
    } else {
      return false;
    }
  }
}

export { Ship };
