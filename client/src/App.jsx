import axios from 'axios';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Main from './Component/Main/Main'
import Quiz from './Component/Quiz/Quiz'
import Result from './Component/Result/Result'

import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from '../context/UserContext';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/main',
      element: <Main />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path:"/quiz",
      element:<Quiz/>
    },
    {
      path:"/result",
      element:<Result/>
    }
  ]);

  return (
    <UserContextProvider>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      
      <RouterProvider router={router} />
     
    </UserContextProvider>
  );
}

export default App;
