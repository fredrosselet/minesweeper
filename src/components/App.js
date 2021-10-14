import React from 'react';
import '../styles/App.css';
import ResetContainer from '../containers/ResetContainer';
import BoardContainer from '../containers/BoardContainer';
import RemainingContainer from '../containers/RemainingContainer';

const App = () => (
  <div className="App">
    <ResetContainer/>
    <BoardContainer/>
    <RemainingContainer/>
  </div>
);

export default App;