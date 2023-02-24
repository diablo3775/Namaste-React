import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*  /> */}
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)

