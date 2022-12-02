import React, { useState, useRef } from 'react';

// store
import { useStore } from '../hooks/useStore';

// components
import { Button } from './button';

/**
 * Renders the 'Check all' button.
 *
 * Inner text changes depending on state.
 */
const CheckAllButton: React.FC = () => {
  const { state, dispatch } = useStore();
  const allAreDone = state.length > 0 && state.every((item) => item.done);

  // Dispatches to toggle whether all items are checked
  const toggleChecked = () => dispatch({ type: 'toggle/all' });

  return (
    <Button onClick={toggleChecked}>
      {allAreDone ? 'Uncheck all' : 'Check all'}
    </Button>
  );
};

/**
 * Renders the 'Clear' button
 */
const ClearButton: React.FC = () => {
  const { state, dispatch } = useStore();
  const anyAreDone = state.length > 0 && state.some((item) => item.done);

  // Dispatches to remove all checked items from the list
  const clearList = () => dispatch({ type: 'delete/checked' });

  return (
    <Button onClick={clearList} disabled={!anyAreDone}>
      Clear
    </Button>
  );
};

/**
 * Renders the main controls for the app
 */
export const Controls: React.FC = () => {
  const { dispatch } = useStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>('');

  // Controls the input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // Handles form submissions to add new items
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      dispatch({ type: 'add/one', payload: { label: inputRef.current.value } });
      setValue('');
      inputRef.current.focus();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex items-stretch mb-6">
        <label className="block flex-1 h-full">
          <span className="sr-only">Add new item</span>
          <input
            ref={inputRef}
            required
            type="text"
            value={value}
            onChange={handleChange}
            className="block w-full h-full border-y border-l border-gray-500 border-r-emerald-700 rounded-l-md py-2 px-3 outline-none focus:ring-inset focus:ring-2 focus:ring-emerald-700 transition-all"
          />
        </label>
        <button
          type="submit"
          aria-label="Submit"
          className="py-2 px-3 bg-emerald-700 hover:bg-emerald-600 transition-all text-white flex justify-center text-basis items-center font-bold rounded-r-md leading-none"
        >
          +
        </button>
      </form>
      <div className="grid grid-cols-[7.5rem_9rem] gap-4">
        <CheckAllButton />
        <ClearButton />
      </div>
    </>
  );
};
