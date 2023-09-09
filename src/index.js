import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './View/Home/Home';
import Project from './View/Project/Project';
import About from './View/About/About';
import Contact from './View/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Project",
    element: <Project/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path: "/About",
    element: <About/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <RouterProvider router={router}/>
  </>
);


