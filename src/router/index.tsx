import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Area from '@/page/Area';

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
        path: '/food',
        element: <div>Food</div>,
      },
      {
        path: '/monster',
        element: <div>Monster</div>,
      },
    ],
  },
]);
