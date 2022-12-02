import React, { useContext, useReducer } from 'react';
import { reducer } from './reducer';
import { readPersistedState } from './persist-state';

// types
import type { Action } from './reducer';

export type ListItem = {
  label: string;
  id: string;
  done: boolean;
};

export type State = ListItem[];

// initialize store
const defaultState = readPersistedState();

const defaultContext = {
  dispatch: () => null,
  state: defaultState,
};

export const StoreContext = React.createContext<{
  dispatch: React.Dispatch<Action>;
  state: State;
}>(defaultContext);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};
