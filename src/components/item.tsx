import React from 'react';

// icon
import { BsCheck } from 'react-icons/bs';

// store
import { useStore } from '../hooks/useStore';

// types
import type { ListItem } from '../app/store/store';

type Props = {
  item: ListItem;
};

export const Item: React.FC<Props> = ({ item }) => {
  const { dispatch } = useStore();
  const { label, done, id } = item;

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'toggle/one', payload: { id } });
  };

  return (
    <li className="py-1 border-b border-b-gray-200 mb-2 block w-full overflow-hidden">
      <label className="relative user-select-none flex items-center w-full overflow-hidden cursor-pointer">
        <span className="sr-only">Check off {label} from list</span>
        {/* custom checkbox */}
        <div className="block relative select-none w-4 h-4">
          <input
            type="checkbox"
            checked={done}
            onChange={handleCheck}
            className="absolute opacity-0 h-0 w-0"
          />
          {/* box */}
          <span
            className={`absolute inset-0 border rounded-md transition-all ${
              done
                ? 'bg-emerald-50 border-emerald-400'
                : 'bg-transparent border-gray-400'
            }`}
          ></span>
          {/* check */}
          <BsCheck
            aria-hidden
            className={`absolute inset-0 text-emerald-700 transition-all ${
              done ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        <span
          className={`ml-2 flex-1 inline-block ${
            done ? 'line-through text-gray-500' : ''
          }`}
        >
          {label}
        </span>
      </label>
    </li>
  );
};
