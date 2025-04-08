import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from './Components/Cart.jsx'
import Profile from './Components/Profile.jsx'
import Home from "./Components/Home"
import ErrorPage from './ErrorPage.jsx'
import SingleProduct from './Components/SingleProduct.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppStore from './Store/AppStore.js'
import { Provider } from 'react-redux'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/product/:id",
        element: <SingleProduct></SingleProduct>,
      },
    ],
    errorElement:<ErrorPage></ErrorPage>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={AppStore}>
    <RouterProvider router={appRouter} />,
  </Provider>
  
)
