import createBoard from './newBoard';
import { uncoverSquares } from './helpers';

export let initialState = {
  board: createBoard(10, 10, 10),
  bombs: 10,
  toggled: [],
  clicked: [],
  flagged: [],
  questioned: [],
  outcome: null,
  activeClicked: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET':
      return {
        ...initialState,
        board: action.payload.board,
        bombs: action.payload.bombs
      };
    case 'TOGGLE':
      const toggled = state.toggled.slice();
      const board = state.board.slice();
      uncoverSquares(board, action.payload[0], action.payload[1], 0, toggled);
      return {
        ...state,
        toggled
      };
    case 'FLAG':
      return {
        ...state,
        flagged: [...state.flagged, action.payload]
      };
    case 'QUESTION':
      return {
        ...state,
        questioned: [...state.questioned, action.payload.location],
        flagged: [
          ...state.flagged.slice(0, action.payload.flagIndex),
          ...state.flagged.slice(action.payload.flagIndex + 1)
        ],
      }
    case 'UNQUESTION':
      return {
        ...state,
        questioned: [
          ...state.questioned.slice(0, action.payload),
          ...state.questioned.slice(action.payload + 1)
        ]
      };
    case 'CLICK':
      return {
        ...state,
        clicked: [...state.clicked, action.payload]
      };
    case 'ACTIVE_CLICK':
      return {
        ...state,
        activeClicked: action.payload
      };
    case 'END_GAME':
      return {
        ...state,
        outcome: action.payload
      };
    default: {
      return state;
    }
  }
};