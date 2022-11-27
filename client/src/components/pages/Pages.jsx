import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './home/Home';
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'

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
