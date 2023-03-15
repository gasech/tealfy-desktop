import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from '@renderer/Root'
import '@renderer/assets/index.css'

// Provider

// Pages
import HomePage from '@renderer/pages/HomePage';
import NotFoundPage from '@renderer/pages/NotFoundPage';
import SettingsPage from '@renderer/pages/SettingsPage';
import AddWidgetPage from '@renderer/pages/AddWidgetPage';
import WidgetPage from '@renderer/pages/WidgetPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/widgets/:id",
        element: <WidgetPage />
      },
      {
        path: "/add_widget",
        element: <AddWidgetPage />
      },
      {
        path: "/settings",
        element: <SettingsPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
