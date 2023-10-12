import React, { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Menu from 'src/components/Menu'
import MainLayout from 'src/layout/MainLayout'
import AboutUs from 'src/page/AboutUs'
import Certificate from 'src/page/Certificate'
import Contact from 'src/page/Contact'
import Product from 'src/page/Product'
import ProductDetail from 'src/page/ProductDetail/ProductDetail'
import ViewMain from 'src/page/ViewMain'
const useRouterElements = () => {
  const elements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <ViewMain />
        </MainLayout>
      )
    },
    {
      path: '/about',
      element: (
        <MainLayout>
          <AboutUs />
        </MainLayout>
      )
    },
    {
      path: '/product/:id',
      element: (
        <MainLayout>
          <Product />
        </MainLayout>
      )
    },
    {
      path: '/san-pham/:id',
      element: (
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      )
    },
    {
      path: '/certificate',
      element: (
        <MainLayout>
          <Certificate />
        </MainLayout>
      )
    },
    {
      path: '/contact',
      element: (
        <MainLayout>
          <Contact />
        </MainLayout>
      )
    }
  ])
  return elements
}

export default useRouterElements
