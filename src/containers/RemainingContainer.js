import { connect } from 'react-redux';
import Remaining from '../components/Remaining.js';

const mapStateToProps = (state) => ({
  bombs: state.bombs,
  flagged: state.flagged.length,
  outcome: state.outcome
});

const BoardContainer = connect(mapStateToProps)(Remaining);

export default BoardContainer;