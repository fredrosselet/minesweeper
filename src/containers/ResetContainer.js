import { connect } from 'react-redux';
import Reset from '../components/Reset.js';
import { reset } from '../actions';
import createBoard from '../newBoard';

const mapStateToProps = (state) => ({
  board: state.board,
  bombs: state.bombs,
  outcome: state.outcome,
  activeClicked: state.activeClicked
});

const mapDispatchToProps = (dispatch) => ({
  resetGame: (bombs, rows, columns) => {
    dispatch(reset(createBoard(bombs, rows, columns), bombs));
  }
});

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Reset);

export default BoardContainer;