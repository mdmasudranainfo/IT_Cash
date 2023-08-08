import { createBrowserRouter } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import MainLayout from '../Components/Layout/MainLayout'
import Register from '../Pages/Register/Register'
import Home from '../Pages/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
])
export default router
