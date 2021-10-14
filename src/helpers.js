export const traverseBoard = (matrix, callback, max) => {
  matrix.forEach((row, rowIndex) => row.forEach((col, colIndex) => callback(matrix, rowIndex, colIndex)));
};

// runs a callback each time a square matches target number (bombs)
export const checkAdjacentSquares = (matrix, rowIndex, colIndex, target, callback) => {
  const rowMax = matrix.length - 1;
  const colMax = matrix[0].length - 1;
  let conditions = [
    // top-left
    (rowIndex > 0 && colIndex > 0 && matrix[rowIndex - 1][colIndex - 1] === target),
    // top-center
    (rowIndex > 0 && matrix[rowIndex - 1][colIndex] === target),
    // top-right
    (rowIndex > 0 && colIndex < colMax && matrix[rowIndex - 1][colIndex + 1] === target),
    // left
    (colIndex > 0 && matrix[rowIndex][colIndex - 1] === target),
    // right
    (colIndex < colMax && matrix[rowIndex][colIndex + 1] === target),
    // bottom-left
    (rowIndex < rowMax && colIndex > 0 && matrix[rowIndex + 1][colIndex - 1] === target),
    // bottom-center
    (rowIndex < rowMax && matrix[rowIndex + 1][colIndex] === target),
    // bottom-right
    (rowIndex < rowMax && colIndex < colMax && matrix[rowIndex + 1][colIndex + 1] === target)
  ];

  if (matrix[rowIndex][colIndex] !== 'B') {
    conditions.forEach(callback);
  }
};

export const checkArray = (row, col, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === row && array[i][1] === col) {
      return i;
    }
  }
  return -1;
};

export const uncoverSquares = (matrix, rowIndex, colIndex, target, array) => {
  if (0 <= rowIndex && rowIndex < matrix.length && 0 <= colIndex && colIndex < matrix[0].length && checkArray(rowIndex, colIndex, array) === -1) {
    // current square
    array.push([rowIndex, colIndex]);
    // base case
    if (matrix[rowIndex][colIndex] !== target) {
      return array;
    }
    // check adjacent squares
    uncoverSquares(matrix, rowIndex - 1, colIndex - 1, target, array);
    uncoverSquares(matrix, rowIndex - 1, colIndex, target, array);
    uncoverSquares(matrix, rowIndex - 1, colIndex + 1, target, array);
    uncoverSquares(matrix, rowIndex, colIndex - 1, target, array);
    uncoverSquares(matrix, rowIndex, colIndex + 1, target, array);
    uncoverSquares(matrix, rowIndex + 1, colIndex - 1, target, array);
    uncoverSquares(matrix, rowIndex + 1, colIndex, target, array);
    uncoverSquares(matrix, rowIndex + 1, colIndex + 1, target, array);
  }
};