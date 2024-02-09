import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Wacth from './pages/Wacth.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App/>),
    children: [
      {
        path:"/",
        element:(<Home/>)
      },
      {
        path:"/watch",
        element:(<Wacth/>)
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />  
)

