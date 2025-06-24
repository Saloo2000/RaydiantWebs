import React from 'react';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'; // Adjust the path as needed
import HomePage from './pages/HomePage';
import AppLayout from './Components/AppLayout';
import Service from './pages/Service';



const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/service',
        element:<Service/>
      }
    ],
    
  }
],
{
  basename: "/RaydiantWebs"  // <-- Add your base path here
})

function App() {
  return <RouterProvider router={router} />;
}

export default App;
