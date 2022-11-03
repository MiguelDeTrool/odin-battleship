import { gameInit } from "./gameInit.js";
import { turnHandler } from "./turnHandler.js";

const gameLoop = (() => {
  async function run() {
    let _PlayersInfo = await gameInit.newGame();
    turnHandler.setPlayers(_PlayersInfo);
    while (turnHandler.gameOver() === false) {
      turnHandler.nextTurn();
    }
  }

  return { run };
})();

export { gameLoop };

let shipPositionsTest1 = [];
