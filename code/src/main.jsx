import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error/>,
    children: [
     
    ]
  }
])

const root = createRoot(document.querySelector('#root'));
root.render(<RouterProvider router = {router} />);
