import { useState, useCallback } from 'react';
import { nanoid } from 'nanoid';

// components
import { Layout } from '../components/layout';
import { Item } from '../components/item';
import { Controls } from '../components/controls';

// types
export type ListItem = {
  label: string;
  id: string;
  done: boolean;
};

type List = ListItem[];

// TODO: remove in production
const defaultList = [
  { label: 'milk', id: '0', done: false },
  { label: 'bread', id: '1', done: false },
  { label: 'eggs', id: '2', done: true },
  // { label: 'milk', id: '3', done: false },
  // { label: 'bread', id: '4', done: false },
  // { label: 'eggs', id: '5', done: true },
  // { label: 'milk', id: '6', done: false },
  // { label: 'bread', id: '7', done: false },
  // { label: 'eggs', id: '8', done: true },
  // { label: 'milk', id: '9', done: false },
  // { label: 'bread', id: '10', done: false },
  // { label: 'eggs', id: '11', done: true },
  // { label: 'milk', id: '12', done: false },
  // { label: 'bread', id: '13', done: false },
  // { label: 'eggs', id: '14', done: true },
];

export const App = () => {
  const [list, setList] = useState<List>(defaultList);

  const checkItem = useCallback((id: string) => {
    setList((prev) => {
      return prev.map((item) =>
        item.id === id
          ? {
              ...item,
              done: !item.done,
            }
          : item
      );
    });
  }, []);

  const addItem = useCallback((label: string) => {
    setList((prev) => {
      return [...prev, { label, done: false, id: nanoid() }];
    });
  }, []);

  const toggleChecked = useCallback(() => {
    setList((prev) => {
      if (prev.every((item) => item.done)) {
        return prev.map((item) => ({ ...item, done: false }));
      } else {
        return prev.map((item) => ({ ...item, done: true }));
      }
    });
  }, []);

  const clearList = useCallback(() => {
    setList((prev) => prev.filter((item) => !item.done));
  }, []);

  return (
    <Layout>
      <h1 className="text-center text-gray-900 text-4xl mb-8">Grocery List</h1>
      <ul className="flex-1 overflow-y-auto overflow-x-hidden w-full mb-16">
        {list.map((item) => (
          <Item item={item} key={item.id} onCheck={checkItem} />
        ))}
      </ul>
      <div>
        <Controls
          addItem={addItem}
          toggleChecked={toggleChecked}
          clearList={clearList}
        />
      </div>
    </Layout>
  );
};
