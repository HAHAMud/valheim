import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { Area, Inventory, Creatures } from '@/page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/area',
        element: <Area />,
      },
      {
        path: '/inventory',
        element: <Inventory />,
      },
      {
        path: '/monster',
        element: <Creatures />,
      },
    ],
  },
]);
