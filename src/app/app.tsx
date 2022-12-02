// components
import { Layout } from '../components/layout';
import { Controls } from '../components/controls';
import { List } from '../components/list';

// context provider
import { StoreProvider } from './store/store';

const Content: React.FC = () => (
  <Layout>
    <h1 className="text-center text-gray-900 text-4xl mb-8">Grocery List</h1>
    <div className="flex-1 overflow-y-auto overflow-x-hidden w-full mb-16">
      <List />
    </div>
    <div>
      <Controls />
    </div>
  </Layout>
);

export const App: React.FC = () => (
  <StoreProvider>
    <Content />
  </StoreProvider>
);
