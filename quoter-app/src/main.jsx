import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root, {
  loader as rootLoader,
  action as rootAction,
}from './routes/root';
import ErrorPage from './error-page';
import Product, {
      loader as  productLoader,
} from './routes/products';


import EditContact, {
                    action as editAction,
                  loader as editLoader} from './routes/edit';
import {action as deleteContact} from './routes/destroy';
import Index from './routes';
import { Article, loader as articleLoader } from './routes/Article';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: "products/",
          element: <Product />,
          loader: productLoader,
          children: [
            {
              path: "/products/:productId",
              element: <Article />,
              loader: articleLoader,
            },
          ]
          
        },
        
        /*{
          path: "contacts/:contactId/destroy",
          action: deleteContact,
        }, */
      ],
    }      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>,
)
