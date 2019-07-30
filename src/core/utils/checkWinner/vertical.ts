const checkVerticalDiscs = (grid: any[]) => {
  const columnsN = grid.length;
  const rowsN = grid[0].length;

  let discColor = '';
  let discCount = 0;

  for (let col = 0; col < columnsN; col++) {
    for (let row = 0; row < rowsN; row++) {
      let disc = grid[col][row];

      if (!disc) {
        discCount = 0;
        discColor = '';
        continue;
      } else if (disc !== discColor) {
        discCount = 1;
        discColor = disc;
        continue;
      }

      discCount++;
      if (discCount === 4) {
        return discColor;
      }
    }
  }
  return null;
};

export default checkVerticalDiscs;
