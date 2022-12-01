// components
import { Item } from './item';

// store
import { useStore } from '../hooks/useStore';

/**
 * Renders the main grocery list
 */
export const List = () => {
  const { state } = useStore();
  return (
    <ul className="w-full">
      {state.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
};
