import { gridController } from "../DOM/gridController.js";
import { Player } from "../player/player.js";

const turnHandler = (() => {
  let _player1;
  let _player2;
  let _currentPlayer;
  let _currentOpponent;

  const setPlayers = (_playersInfo) => {
    _player1 = new Player(_playersInfo[1].name, _playersInfo[1].isAi);
    _player2 = new Player(_playersInfo[2].name, _playersInfo[2].isAi);
    _currentPlayer = _player2;
    _currentOpponent = _player1;
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
    console.log(_currentPlayer);

    gridController.fillGrids(
      ".own .board",
      ".enemy .board",
      _currentPlayer,
      _currentOpponent
    );

    const enemyBoard = document.querySelector(".enemy .board");
    return new Promise((resolve) => {
      enemyBoard.addEventListener(
        "click",
        (e) => {
          let num = e.target.getAttribute("num");
          let x = num % 10;
          let y = parseInt(num / 10);
          _currentOpponent.board.receiveAttack([x, y]);
          resolve();
        },
        { once: true }
      );
    });
  };

  const switchPlayers = () => {
    let temp = _currentPlayer;
    _currentPlayer = _currentOpponent;
    _currentOpponent = temp;
  };

  const _addTestShips = () => {
    _player1.board.placeShip([0, 1], 5, 1);
    _player1.board.placeShip([6, 6], 4, 0);
    _player1.board.placeShip([4, 4], 3, 0);
    _player1.board.placeShip([3, 7], 3, 1);
    _player1.board.placeShip([2, 0], 2, 1);

    // Use same test ships to check hits more easily
    _player2.board.placeShip([0, 1], 5, 1);
    _player2.board.placeShip([6, 6], 4, 0);
    _player2.board.placeShip([4, 4], 3, 0);
    _player2.board.placeShip([3, 7], 3, 1);
    _player2.board.placeShip([2, 0], 2, 1);
  };

  return { setPlayers, gameOver, nextTurn, switchPlayers };
})();

export { turnHandler };
