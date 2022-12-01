import React, { useState, useRef } from 'react';

// components
import { Button } from './button';

type Props = {
  addItem: (_: string) => void;
  toggleChecked: () => void;
  clearList: () => void;
};

export const Controls: React.FC<Props> = ({
  addItem,
  toggleChecked,
  clearList,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      addItem(inputRef.current.value);
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
      <div className="flex space-x-4">
        <Button onClick={toggleChecked}>Check all</Button>
        <Button onClick={clearList}>Clear</Button>
      </div>
    </>
  );
};
