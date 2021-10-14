export const reset = (board, bombs) => ({
  type: 'RESET',
  payload: {
    board, bombs
  }
});

export const toggle = (rowIndex, colIndex) => ({
  type: 'TOGGLE',
  payload: [rowIndex, colIndex]
});

export const flag = (rowIndex, colIndex) => ({
  type: 'FLAG',
  payload: [rowIndex, colIndex]
});

export const question = (rowIndex, colIndex, flagIndex) => ({
  type: 'QUESTION',
  payload: {
    location: [rowIndex, colIndex],
    flagIndex
  }
});

export const unquestion = (questionIndex) => ({
  type: 'UNQUESTION',
  payload: questionIndex
});

export const click = (rowIndex, colIndex) => ({
  type: 'CLICK',
  payload: [rowIndex, colIndex]
});

export const activeClick = (boolean) => ({
  type: 'ACTIVE_CLICK',
  payload: boolean
});

export const endGame = (outcome) => ({
  type: 'END_GAME',
  payload: outcome
});