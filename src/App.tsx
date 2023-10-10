import React from 'react'
import useRouterElements from '../useRouteHook'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
export default function App() {
  const elements = useRouterElements()
  return <div>{elements}</div>
}
