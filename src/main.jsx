import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainRouts from './Routs/MainRouts.jsx';
import Home from './Components/Pages/Home.jsx';
import LogIn from './Components/Pages/LogIn.jsx';
import Register from './Components/Pages/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRouts></MainRouts>,
    children:[
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/login",
      element: <LogIn></LogIn>
    },
    {
      path: "/register",
      element: <Register></Register>
    }
  
  ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

