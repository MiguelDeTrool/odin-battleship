import { gridController } from "../DOM/gridController.js";
import { Player } from "../player/player.js";

const turnHandler = (() => {
  let _player1;
  let _player2;
  let _currentPlayer = _player2;
  let _currentOpponent = _player1;

  const setPlayers = (_playersInfo) => {
    _player1 = new Player(_playersInfo[1].name, _playersInfo[1].isAi);
    _player2 = new Player(_playersInfo[2].name, _playersInfo[2].isAi);
    _addTestShips(); // Comment out to remove test ships placement
  };

  const gameOver = () => {
    if (
      _player1.board.areAllShipsSunk() === true ||
      _player2.board.areAllShipsSunk() === true
    ) {
      return true;
    } else return false;
  };

  const nextTurn = () => {
    _switchPlayers();
    gridController.fillGrids(
      ".own .board",
      ".enemy .board",
      _currentPlayer,
      _currentOpponent
    );
  };

  const _switchPlayers = () => {
    let temp = _currentPlayer;
    _currentPlayer = _currentOpponent;
    _currentOpponent = temp;
  };

  const _addTestShips = () => {
    _player1.board.placeShip([1, 1], 2, 1);
    _player1.board.placeShip([4, 4], 3, 0);

    _player2.board.placeShip([0, 0], 5, 1);
    _player2.board.placeShip([3, 3], 2, 1);
  };

  return { setPlayers, gameOver, nextTurn };
})();

export { turnHandler };
