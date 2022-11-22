import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import Home from '../home/Home';
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

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
