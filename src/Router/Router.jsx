import { createBrowserRouter } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import MainLayout from '../Components/Layout/MainLayout'
import Register from '../Pages/Register/Register'
import Home from '../Pages/Home/Home'
import CourseDetail from '../Pages/CourseDetail/CourseDetail'
import DashboardLayout from '../Components/Layout/DashboardLayout'
import ActiveCourses from '../Components/DashboardComponent/ActiveCourses/ActiveCourses'
import JoinClass from '../Components/DashboardComponent/JoinClass/JoinClass'
import HomeworkSubmit from '../Components/DashboardComponent/HomeworkSubmit/HomeworkSubmit'

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
        path: '/coursedetail/:id',
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
    children: [
      {
        path: '/dashboard/activeclass',
        element: <ActiveCourses />,
      },
      {
        path: '/dashboard/joinclass',
        element: <JoinClass />,
      },
      {
        path: '/dashboard/homework',
        element: <HomeworkSubmit />,
      },
    ],
  },
])
export default router
