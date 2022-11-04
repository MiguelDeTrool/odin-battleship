const gridController = (() => {
  const _size = 10;
  const _gridCellsNum = _size * _size;

  const _resetGrid = (gridElement) => {};

  const newGrid = (selector) => {
    const gridContainer = document.querySelector(selector);
    _resetGrid(gridContainer);

    for (let i = 0; i < _gridCellsNum; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("num", i);
      gridContainer.appendChild(cell);
    }
  };

  // TO DO create logic that goes through 2D array and adds classes to squares accordingly
  const fillGrids = (
    board1selector,
    board2selector,
    currentPlayer,
    currentEnemy
  ) => {
    const ownBoard = document.querySelector(board1selector);
    const ownBoardCells = ownBoard.querySelectorAll(".cell");

    const enemyBoard = document.querySelector(board2selector);
    const enemyBoardCells = enemyBoard.querySelectorAll(".cell");

    // Reinitialize all cells by removing info classes
    ownBoardCells.forEach((cell) => {
      cell.classList.remove("has-ship");
      cell.classList.remove("hit");
    });
    enemyBoardCells.forEach((cell) => {
      cell.classList.remove("has-ship");
      cell.classList.remove("hit");
    });

    // Go through 2D board array and add classes to cells if they have a ship or have been hit
    for (let i = 0; i < _size; i++) {
      for (let j = 0; j < _size; j++) {
        let ownInfo = currentPlayer.board.squareInfo([i, j]);
        let enemyInfo = currentEnemy.board.squareInfo([i, j]);
        if (ownInfo.hasShip === true) {
          ownBoardCells.item(j * 10 + i).classList.add("has-ship");
        }
        if (ownInfo.hit === true) {
          ownBoardCells.item(j * 10 + i).classList.add("hit");
        }
        if (enemyInfo.hit === true) {
          enemyBoardCells.item(j * 10 + i).classList.add("hit");
          // Put ship info condition in hit condition, so that only the ship square that have been hit show up
          if (enemyInfo.hasShip === true) {
            enemyBoardCells.item(j * 10 + i).classList.add("has-ship");
          }
        }
      }
    }
  };

  return {
    newGrid,
    fillGrids,
  };
})();

export { gridController };
