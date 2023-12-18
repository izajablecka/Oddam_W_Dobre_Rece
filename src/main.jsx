import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/index.scss'
import '../src/scss/main.scss'
import ErrorBoundary from './ErrorBoundary';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorBoundary />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
);
