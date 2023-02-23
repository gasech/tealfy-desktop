import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root'
import './assets/index.css'

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Settings from './pages/Settings';
import AddWidget from './pages/AddWidget';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/add_widget",
        element: <AddWidget />
      },
      {
        path: "/settings",
        element: <Settings />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
