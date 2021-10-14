import { traverseBoard, checkAdjacentSquares, checkArray } from './helpers';

const adjustSquare = (matrix, rowIndex, colIndex) => {
  let current = matrix[rowIndex][colIndex];
  const increaseNumber = (condition) => {
    if (condition === true) {
      current++;
      matrix[rowIndex][colIndex] = current;
    }
  }
  checkAdjacentSquares(matrix, rowIndex, colIndex, 'B', increaseNumber);
};

const createBoard = (bombs = 10, rows = 10, columns = 10) => {
  // determine bomb locations
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  let bombCoordinates = [];
  while (bombs > 0) {
    let randomRow = getRandomIntInclusive(0, rows - 1);
    let randomCol = getRandomIntInclusive(0, columns - 1);
    if (checkArray(randomRow, randomCol, bombCoordinates) === -1) {
      bombCoordinates.push([randomRow, randomCol]);
      bombs--;
    }
  }

  // build board with bombs
  let matrix = [];
  for (let x = 0; x < rows; x++) {
    let row = [];
    for (let y = 0; y < columns; y++) {
      if (checkArray(x, y, bombCoordinates) > -1) {
        row.push('B');
      } else {
        row.push(0);
      }
    }
    matrix.push(row);
  }

  // adjust squares around bombs
  traverseBoard(matrix, adjustSquare);
  // console.log(matrix);
  return matrix;
};

export default createBoard;