const matchReq = 4;

const checkDiagonalDiscs = (grid: any[]) => {
  const rowsN = grid[0].length;
  const columnsN = grid.length;
  return isTopRight(grid, columnsN, rowsN) || isTopLeft(grid, columnsN, rowsN);
};

const isTopLeft = (grid: any[], columnsN: number, rowsN: number) => {
  let discCount;
  let discColor;
  let col;

  let baseCol = matchReq - rowsN;
  for (baseCol; baseCol < columnsN - (matchReq - 1); baseCol++) {
    discCount = 0;
    discColor = '';
    col = baseCol - 1;

    for (let row = 0; row < rowsN; row++) {
      col++;
      if (col >= 0 && col < columnsN && row < rowsN) {
        let disc = grid[col][row];
        if (!disc) {
          discCount = 0;
        }
        if (!!disc && !!discColor) {
          if (disc !== discColor) {
            discCount = 0;
          } else {
            discCount++;
          }
        }
        discColor = disc;
        if (discCount + 1 === matchReq) {
          return discColor;
        }
      }
    }
  }

  return false;
};

const isTopRight = (grid: any[], columnsN: number, rowsN: number) => {
  let discCount;
  let discColor;
  let col;

  let baseCol = matchReq - rowsN;
  for (baseCol; baseCol < columnsN - (matchReq - 1); baseCol++) {
    discCount = 0;
    discColor = '';
    col = baseCol - 1;
    for (let row = rowsN - 1; row >= 0; row--) {
      col++;
      if (col >= 0 && col < columnsN && row < rowsN) {
        let disc = grid[col][row];
        if (!disc) {
          discCount = 0;
        }
        if (!!disc && !!discColor) {
          if (disc !== discColor) {
            discCount = 0;
          } else {
            discCount++;
          }
        }
        discColor = disc;
        if (discCount + 1 === matchReq) {
          return discColor;
        }
      }
    }
  }

  return false;
};

export default checkDiagonalDiscs;
