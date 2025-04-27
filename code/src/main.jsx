import React from 'react';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
const HomePage = React.lazy(() => import('./pages/HomePage.jsx'));
const Error = React.lazy(() => import('./components/Error.jsx'));
const ContactPage = React.lazy(() => import('./pages/ContactPage.jsx'));
const AboutPage = React.lazy(() => import('./pages/AboutUs.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      }
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
