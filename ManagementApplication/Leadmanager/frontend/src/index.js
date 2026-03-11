import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from "./App";
import Login from './components/Login';
import Dashboard from './components/leads/Dashboard';
import NotFoundPage from './components/NotFoundPage';

import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';


/* ✅ Auth check */
function AuthUser() {
  const token = localStorage.getItem("token");
  console.log("AuthUser token:", token); // Debugging log
  return !!token;
}

/* ✅ Protected Route */
function ProtectedRoute() {
  if (!AuthUser()) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

/* ✅ Router */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "login", element: <Login /> },
      { element: <ProtectedRoute />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "app", element: <App />,
            children: [
              { path: "app/home", element: <Dashboard /> },
              { path: "app/view_items", element: <Dashboard /> },
              { path: "app/add_item", element: <Dashboard /> },
              { path: "app/delete_item", element: <Dashboard /> },
              { path: "app/edit_item", element: <Dashboard /> },
            ],
          },
        ],
      },
    ],
  },
]);


/* ✅ Render */

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);