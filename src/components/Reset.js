import React from 'react';
import '../styles/Reset.css';
import Bomb from './Bomb';

const Reset = ({board, bombs, outcome, activeClicked, resetGame}) => (
  <div>
    <form name="form" className="form" onSubmit={(e)=> {
      e.preventDefault();
      let newBombs = e.target[2].value;
      const width = e.target[0].value;
      const height = e.target[1].value;
      if (newBombs >= (width * height)) {
        newBombs = (width * height);
      }
      resetGame(newBombs, e.target[0].value, e.target[1].value);
    }
      }>
      <div className="parameters">
        <label htmlFor="width">x</label>
        <input id="width" name="width" type="number" min="3" max="50" defaultValue={board[0].length}/>
        <label htmlFor="height">y</label>
        <input id="height" name="height" type="number" min="3" max="50" defaultValue={board.length}/>
        <label htmlFor="bombs"><Bomb/></label>
        <input name="bombs" type="number" min="3" max="2500" defaultValue={bombs}/>
      </div>
      <input type="submit" className="reset" value={
          outcome === 'loss' ? '😵' :
          outcome === 'win' ? '😎' :
          activeClicked ? '😲' :
          '😊'
        }>
      </input>
    </form>
  </div>
);

export default Reset;