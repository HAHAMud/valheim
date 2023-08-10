import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { Area, Library } from '@/page';

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
        element: <Library />,
      },
      {
        path: '/monster',
        element: <div>Monster</div>,
      },
    ],
  },
]);
