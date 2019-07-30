import checkHorizontalDiscs from './horizontal';
import checkVerticalDiscs from './vertical';
import checkDiagonalDiscs from './diagonal';

const checkWinner = (grid: any[]) => {
  return (
    checkVerticalDiscs(grid) ||
    checkHorizontalDiscs(grid) ||
    checkDiagonalDiscs(grid)
  );
};

export default checkWinner;
