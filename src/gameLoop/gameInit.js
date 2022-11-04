import { gridController } from "../DOM/gridController.js";
import { Prompt } from "../DOM/prompt.js";

const gameInit = (() => {
  async function newGame() {
    gridController.newGrid(".own .board");
    gridController.newGrid(".enemy .board");

    let againstComputerPrompt = new Prompt(
      "Do you want to play against the computer?"
    );
    let againstComputer = await againstComputerPrompt.formSubmit();
    againstComputerPrompt.prompt.remove();
    againstComputerPrompt = null;

    if (againstComputer == true) {
      let player1NamePrompt = new Prompt("What's your name?");
      let player1Name = await player1NamePrompt.formSubmit();
      player1NamePrompt.prompt.remove();
      player1NamePrompt = null;

      return {
        1: { name: player1Name, isAi: false },
        2: { name: "Computer", isAi: true },
      };
    } else {
      let player1NamePrompt = new Prompt("What's Player 1's  name?");
      let player1Name = await player1NamePrompt.formSubmit();
      player1NamePrompt.prompt.remove();
      player1NamePrompt = null;

      let player2NamePrompt = new Prompt("What's Player 2's  name?");
      let player2Name = await player2NamePrompt.formSubmit();
      player2NamePrompt.prompt.remove();
      player2NamePrompt = null;

      return {
        1: { name: player1Name, isAi: false },
        2: { name: player2Name, isAi: false },
      };
    }
  }

  async function newTestGame() {
    gridController.newGrid(".own .board");
    gridController.newGrid(".enemy .board");

    // Test players
    return {
      1: { name: "A", isAi: false },
      2: { name: "Computer", isAi: false },
    };
  }

  return { newGame, newTestGame };
})();

export { gameInit };
