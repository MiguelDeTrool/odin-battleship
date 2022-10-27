import { Gameboard } from "./gameboard.js";

test("It creates a grid and can know if there is a ship on a square", () => {
  let board = new Gameboard(8);

  board.placeShip([3, 3], 2, 0);

  expect(board.hasShip([4, 5])).toBe(false);
  expect(board.hasShip([3, 3])).toBe(true);
});
