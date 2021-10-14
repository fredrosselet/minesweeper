import { connect } from 'react-redux';
import Square from '../components/Square.js';
import { toggle, click, flag, question, unquestion, activeClick, endGame } from '../actions';

const mapStateToProps = (state) => ({
  board: state.board,
  bombs: state.bombs,
  toggled: state.toggled,
  flagged: state.flagged,
  clicked: state.clicked,
  outcome: state.outcome,
  questioned: state.questioned
});

const mapDispatchToProps = (dispatch) => ({
  toggle: (rowIndex, colIndex) => {
    dispatch(toggle(rowIndex, colIndex));
  },
  click: (rowIndex, colIndex) => {
    dispatch(click(rowIndex, colIndex));
  },
  flag: (rowIndex, colIndex) => {
    dispatch(flag(rowIndex, colIndex));
  },
  question: (rowIndex, colIndex, flagIndex) => {
    dispatch(question(rowIndex, colIndex, flagIndex));
  },
  unquestion: (questionIndex) => {
    dispatch(unquestion(questionIndex));
  },
  activeClick: (boolean) => {
    dispatch(activeClick(boolean));
  },
  endGame: (outcome) => {
    dispatch(endGame(outcome));
  }
});

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Square);

export default BoardContainer;