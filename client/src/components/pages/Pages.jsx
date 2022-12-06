import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './home/Home';
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import Explore from './explore/Explore';
import Product from './product/Product';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: '/product/:id',
        element: <Product />
      },
    ],
  },
]);

function Pages() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Pages;
