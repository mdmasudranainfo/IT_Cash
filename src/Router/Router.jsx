import { createBrowserRouter } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import MainLayout from '../Components/Layout/MainLayout'
import Register from '../Pages/Register/Register'
import Home from '../Pages/Home/Home'
import CourseDetail from '../Pages/CourseDetail/CourseDetail'
import DashboardLayout from '../Components/Layout/DashboardLayout'

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
        path: '/coursedetail',
        element: <CourseDetail />,
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
  {
    path: '/dashboard',
    element: <DashboardLayout />,
  },
])
export default router
