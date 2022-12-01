import { getItem, setItem } from '../../lib/localStorage';

import type { State } from './store';

/**
 * Persists the given value to localStorage as 'list'
 */
export const persistState = (value: State) => {
  setItem('state', value);
};

/**
 * Reads localStorage for persisted state.
 *
 * Returns the persisted state, or an empty array if not found.
 */
export const readPersistedState = () => {
  const persisted = getItem('state') as State | null;
  return persisted || [];
};
