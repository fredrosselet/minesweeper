import React from 'react';
import '../styles/Square.css';
import { checkArray } from '../helpers';
import Bomb from './Bomb';
import Flag from './Flag';
import X from './X';

const Square = ({
  rowIndex, colIndex,
  board, bombs, toggled, flagged, clicked, questioned, outcome,
  toggle, flag, question, unquestion, click, activeClick, endGame
}) => {

  const numberToWord = (number) => {
    const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    let index = number - 1;
    return words[index];
  }

  const value = board[rowIndex][colIndex];
  const isToggled = (outcome === 'loss') || checkArray(rowIndex, colIndex, toggled) > -1;
  const flagIndex = checkArray(rowIndex, colIndex, flagged);
  const isFlagged = flagIndex > -1;
  const questionIndex = checkArray(rowIndex, colIndex, questioned);
  const isQuestioned = questionIndex > -1;
  const isClicked = checkArray(rowIndex, colIndex, clicked) > -1;

  return (
    <td className={
        "Square" +
        (value === 'B' ? " bomb" : "") +
        (0 < value && !isNaN(value) ? ` ${numberToWord(value)}` : "") +
        (isToggled ? ((isFlagged && value === 'B') ? " untoggled" : " toggled") : " untoggled") +
        (isClicked ? " clicked" : "") +
        (isFlagged ? " flagged" : "") +
        (isQuestioned ? " questioned" : "")
      }
      onClick={
        () => {
          if (!isToggled && !isFlagged && !isClicked && !isQuestioned) {
            toggle(rowIndex, colIndex);
            if (value === 'B') {
              endGame('loss');
            } else if (toggled.length === (board.length * board[0].length) - 1 - bombs) {
              endGame('win');
            }
            click(rowIndex, colIndex);
          }
        }
      }
      onContextMenu={
        (e) => {
          e.preventDefault();
          isQuestioned ? unquestion(questionIndex) : (
            isFlagged ? question(rowIndex, colIndex, flagIndex) : flag(rowIndex, colIndex)
          );
        }
      }
      onMouseDown={() => activeClick(true)}
      onMouseUp={() => activeClick(false)}
    >
      {isToggled ?
        value === 'B' ? (isFlagged ? <Flag/> : <Bomb/>) :
        isFlagged ? <X/> :
        (value === 0 ? null : value) : (isFlagged ? <Flag/> : (isQuestioned ? '?': null))
      }
    </td>
  );
};

export default Square;