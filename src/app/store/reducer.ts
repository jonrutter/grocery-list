import { Reducer } from 'react';
import { nanoid } from 'nanoid';

// utils
import { persistState } from './persist-state';

// types
import type { State } from './store';
export type Action =
  | { type: 'add/one'; payload: { label: string } }
  | {
      type: 'toggle/one';
      payload: { id: string };
    }
  | { type: 'toggle/all' }
  | { type: 'delete/checked' };

// reducer
export const reducer: Reducer<State, Action> = (state, action) => {
  let newState = state;
  switch (action.type) {
    case 'add/one': {
      // add new item with given label
      const { label } = action.payload;
      newState = [...state, { label, done: false, id: nanoid() }];
      break;
    }
    case 'toggle/one': {
      // toggles checked state of item with given id
      const { id } = action.payload;

      newState = state.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      );
      break;
    }
    case 'toggle/all': {
      // checks all items, or else unchecks all items if all are already checked
      if (state.every((item) => item.done === true)) {
        newState = state.map((item) => ({ ...item, done: false }));
      } else {
        newState = state.map((item) => ({ ...item, done: true }));
      }
      break;
    }
    case 'delete/checked': {
      newState = state.filter((item) => !item.done);
      break;
    }
    default: {
      break;
    }
  }
  persistState(newState);
  return newState;
};
