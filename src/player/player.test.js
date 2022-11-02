import { Gameboard } from "../gameboard/gameboard.js";
import { Player } from "./player.js";

test("It has a name, and is human or AI", () => {
  let player1 = new Player("Jared", false);
  let player2 = new Player("Pascal", true);

  expect(player1.name).toBe("Jared");
  expect(player2.name).toBe("Pascal");
  expect(player1.isAI).toBe(false);
  expect(player2.isAI).toBe(true);
});

test("It can play a turn on another player's board", () => {
  jest.mock("../gameboard/gameboard.js");
  const board = {
    receiveAttack: jest.fn((coor) => {}),
  };

  let player1 = new Player("Jared", false);

  player1.playMove(board, [2, 2]);

  expect(board.receiveAttack.mock.calls.length).toBe(1);
  expect(board.receiveAttack).toHaveBeenCalledWith([2, 2]);
});

test("It can play an AI generated turn on another player's board", () => {
  jest.mock("../gameboard/gameboard.js");
  const board = {
    receiveAttack: jest.fn((coor) => {}),
  };

  let AIplayer = new Player("Pascal", true);

  AIplayer.playMove(board);

  expect(board.receiveAttack.mock.calls.length).toBe(1);
});
