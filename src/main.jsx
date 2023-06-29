import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Crypto from './pages/Crypto';
import Trending from './pages/Trending';
import Saved from './pages/Saved';

const router = createBrowserRouter([
  {
   path: "/",
   element: <Home />,
   children: [
    {
      path: "/crypto",
      element: <Crypto />
    },
    {
      path: "/trending",
      element: <Trending />
    },
    {
      path: "/saved",
      element: <Saved />
    },
   ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
