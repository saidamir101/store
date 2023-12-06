import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Switcher from './components/Switcher'
import axios from 'axios'
import Button from '@mui/material/Button';
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/home'
import Layout from './pages/layout/Layout'
 function App() {
  const isRouder=createBrowserRouter([
    // {
    //   path:"",
    //   element:(
    //   )
    // },
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        }
        
        
      ]
    }
  ])
  return ( <RouterProvider  router={isRouder}/>
  )
}
export default App
