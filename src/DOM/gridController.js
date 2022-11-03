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
      gridContainer.appendChild(cell);
    }
  };

  const fillGrid = (selector, currentPlayer, currentOpponent) => {};

  return {
    newGrid,
  };
})();

export { gridController };
