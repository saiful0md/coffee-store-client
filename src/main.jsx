import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
import AuthProvider from './AuthProvider/AuthProvider';
import AddCoffee from './components/AddCoffee';
import SingIn from './components/SingIn';
import SingUP from './components/SingUP';
import UpdateCoffee from './components/UpdateCoffee';
import Users from './components/Users';
import './index.css';
import Main from './Main/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <App></App>,
        loader: () => fetch('https://coffee-store-server-7sx1m951r-saiful-islams-projects-e6e7facb.vercel.app/coffee'),
      },
      {
        path: 'addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: 'updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-7sx1m951r-saiful-islams-projects-e6e7facb.vercel.app/coffee/${params.id}`)
      },
      {
        path: '/singup',
        element: <SingUP></SingUP>
      },
      {
        path: '/singin',
        element: <SingIn></SingIn>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: ()=> fetch('https://coffee-store-server-7sx1m951r-saiful-islams-projects-e6e7facb.vercel.app/users')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
