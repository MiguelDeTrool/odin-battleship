import { gridController } from "../DOM/gridController.js";
import { Player } from "../player/player.js";

const turnHandler = (() => {
  let _Player1;
  let _Player2;
  let _currentPlayer = _Player1;
  let _currentOpponent = _Player2;

  setPlayers = () => {
    _Player1 = new Player(_PlayerInfo[1].name, _PlayerInfo[1].isAi);
    _Player2 = new Player(_PlayerInfo[2].name, _PlayerInfo[2].isAi);
  };

  _switchPlayers = () => {
    let tempPlayer = _currentPlayer;
    _currentPlayer = _currentOpponent;
    _currentOpponent = tempPlayer;
  };

  return { setPlayers };
})();

export { turnHandler };
