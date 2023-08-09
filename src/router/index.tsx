import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/map',
    element: <div>Map</div>,
  },
  {
    path: '/food',
    element: <div>Food</div>,
  },
  {
    path: '/monster',
    element: <div>Monster</div>,
  },
]);
