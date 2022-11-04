import { gameInit } from "./gameInit.js";
import { turnHandler } from "./turnHandler.js";

const gameLoop = (() => {
  async function run() {
    let playersInfo = await gameInit.newTestGame();

    turnHandler.setPlayers(playersInfo);

    while (turnHandler.gameOver() === false) {
      await turnHandler.nextTurn();
      await turnHandler.switchPlayers();
    }
  }

  return { run };
})();

export { gameLoop };
