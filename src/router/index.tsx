import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { Area, Inventory } from '@/page';

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
        path: '/library',
        element: <Inventory />,
      },
      {
        path: '/monster',
        element: <div>Monster</div>,
      },
    ],
  },
]);
