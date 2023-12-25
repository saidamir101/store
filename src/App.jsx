import { useState } from 'react'
import './App.css'
import Switcher from './components/Switcher'
import axios from 'axios'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Home from './pages/home/home'
import Korzina from './pages/korzina/korzina'
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
          // path:"/Home",
          element:<Home/>
        },
        {
          path:"/Korzina",
          element:<Korzina/>
        }

        
        
      ]
    }
  ])
  return (<RouterProvider  router={isRouder}/>)
}
export default App
