import { Ship } from "./ship.js";

test("It creates a new ship, and keeps track of hits and sunk status", () => {
  let ship = new Ship(3);
  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBe(false);

  ship.hit();

  expect(ship.isSunk()).toBe(true);
});
