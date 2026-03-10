
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from "./App";
import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage';

import Dashboard from './components/leads/Dashboard';



const router = createBrowserRouter([
  { path: '/',
    element: <App />, // root layout component
    errorElement: <NotFoundPage />, // 404 page for unmatched routes
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/app", element: <App />, 
        children: [
          { path: "/app/home", element: <Dashboard /> },
          { path: "/app/another-page", element: <Dashboard /> }
        ]
      },
    ],
  },
])

// Create a root.
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );