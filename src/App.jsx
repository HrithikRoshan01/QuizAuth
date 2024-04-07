
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './Component/Main/Main'
import Quiz from './Component/Quiz/Quiz'
import Result from './Component/Result/Result'
import Navbar from './Component/Navbar'
import Timer from './Component/Timer'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Main/>
  },
  {
    path:"/quiz",
    element:<Quiz/>
  },
  {
    path:"/result",
    element:<Result/>
  }
])

function App() {

  return (
    <>
      <Navbar/>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
