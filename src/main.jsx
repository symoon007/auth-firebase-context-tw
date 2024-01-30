import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import AuthProviders from './providers/AuthProviders'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/login', element: <Login/> },
      {path: '/register', element: <Register/>},
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
