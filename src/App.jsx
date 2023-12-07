import { useState } from 'react'
import './App.css'
import Switcher from './components/Switcher'
import axios from 'axios'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Home from './pages/home/home'

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
          index:"/Home",
          element:<Home/>
        },

        
        
      ]
    }
  ])
  return ( <RouterProvider  router={isRouder}/>
  )
}
export default App
