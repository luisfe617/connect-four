const checkHorizontalDiscs = (grid: any[]) => {
  const rowsN = grid[0].length;
  const columnsN = grid.length;

  let discColor = '';
  let discCount = 0;

  for (let x = 0; x < rowsN; x++) {
    discCount = 0;
    discColor = '';
    for (let y = 0; y < columnsN; y++) {
      let disc = grid[y][x];

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

export default checkHorizontalDiscs;
