import { Gameboard } from "./gameboard.js";

test("It creates a grid and can know if there is a ship on a square", () => {
  let board = new Gameboard(10);

  board.placeShip([3, 3], 2, 0);

  expect(board.squareInfo([3, 3])).toMatchObject({ hasShip: true });
  expect(board.squareInfo([4, 5])).toMatchObject({ hasShip: false });
});

test("It knows which ship is on a given square", () => {
  let board = new Gameboard(10);

  board.placeShip([1, 1], 2, 0);
  board.placeShip([3, 3], 2, 0);

  expect(board.squareInfo([0, 0])).toMatchObject({ hasShip: false });
  expect(board.squareInfo([1, 1])).toMatchObject({ hasShip: true, shipID: 0 });
  expect(board.squareInfo([3, 3])).toMatchObject({ hasShip: true, shipID: 1 });
});

test("It keeps tracks of hits, on ships and in sea", () => {
  let board = new Gameboard(10);

  board.placeShip([3, 3], 2, 0);
  board.receiveAttack([3, 3]);
  board.receiveAttack([4, 3]);

  board.receiveAttack([4, 4]);

  expect(board.squareInfo([3, 3])).toMatchObject({ hasShip: true, hit: true });
  expect(board.isShipSunk(0)).toBe(true);

  expect(board.squareInfo([4, 4])).toMatchObject({ hasShip: false, hit: true });
});

test("It reports if the square being attacked has already been hit", () => {
  let board = new Gameboard(10);

  board.placeShip([3, 3], 2, 0);
  board.receiveAttack([3, 3]);

  expect(() => board.receiveAttack([3, 3])).toThrow("Already hit");

  board.receiveAttack([4, 4]);
  expect(() => board.receiveAttack([4, 4])).toThrow("Already hit");
});

test("It reports if all ships are sunk", () => {
  let board = new Gameboard(10);

  board.placeShip([3, 3], 2, 0);
  board.placeShip([5, 5], 2, 1);

  board.receiveAttack([3, 3]);
  board.receiveAttack([4, 3]);

  expect(board.areAllShipsSunk()).toBe(false);

  board.receiveAttack([5, 5]);
  board.receiveAttack([5, 6]);

  expect(board.areAllShipsSunk()).toBe(true);
});
