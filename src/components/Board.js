import React from 'react';
import SquareContainer from '../containers/SquareContainer';
import '../styles/Board.css';

const Board = ({ outcome, board }) => (
  <table className={"Board" + (outcome ? " blocked" : "")}>
    <tbody>
      {board.map((row, rowIndex) =>
        <tr className="row" key={rowIndex}>
          {row.map((singleSquare, colIndex) =>
            <SquareContainer
              key={colIndex}
              rowIndex={rowIndex}
              colIndex={colIndex}
            />
          )}
        </tr>
      )}
    </tbody>
  </table>
);

export default Board;