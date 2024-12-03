import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddUsers from './Components/AddUsers.jsx';
import UpdateUsers from './Components/UpdateUsers.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'/addUsers',
    element:<AddUsers></AddUsers>
  },
  {
    path:'/updateUsers',
    element:<UpdateUsers></UpdateUsers>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
