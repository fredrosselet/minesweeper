import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import Reset from '../components/App';
import createBoard from '../newBoard';
import { reset } from '../actions';

const container = render(
  <Provider store={store}>
    <Reset />
  </Provider>
);

let inputs = container.getAllByRole('spinbutton');

test('it renders smiling emoji as default', () => {
  expect(container.getByText('😊')).toBeInTheDocument();
});

test('it resets the board sizes and number of bombs according to the input parameters', () => {
  inputs.forEach((input) => fireEvent.change(input, {target: { value: 20} }));
  let action = reset(createBoard(inputs[2].value, inputs[0].value, inputs[1].value), Number(inputs[2].value));
  store.dispatch(action);
  let newState = store.getState();
  expect(newState.bombs).toBe(20);
  expect(newState.board).toHaveLength(20);
  expect(newState.board[0]).toHaveLength(20);
});