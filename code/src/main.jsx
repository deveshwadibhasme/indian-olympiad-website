import React from 'react';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import SchoolTiming from './pages/SchoolTiming.jsx';
const HomePage = React.lazy(() => import('./pages/HomePage.jsx'));
const Error = React.lazy(() => import('./components/Error.jsx'));
const ContactPage = React.lazy(() => import('./pages/ContactPage.jsx'));
const AboutPage = React.lazy(() => import('./pages/AboutUs.jsx'));
const InfrastructurePage = React.lazy(() => import('./pages/Infrastructure.jsx'));
const LabsPage = React.lazy(() => import('./pages/LabsPage.jsx'));
const FeesStructurePage = React.lazy(() => import('./pages/FeesStructure.jsx'));
const TransportPage = React.lazy(() => import('./pages/TransportPage.jsx'));
const ActivityCalender = React.lazy(() => import('./pages/ActivityCalender.jsx'));


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
      },
      {
        path: "/infrastructure",
        element: <InfrastructurePage />,
      },
      {
        path: "/labs",
        element: <LabsPage />,
      },
      {
        path: "/fee-structure",
        element: <FeesStructurePage />,
      },
      {
        path: "/transport-routes",
        element: <TransportPage />,
      },
      {
        path: "/school-timing",
        element: <SchoolTiming />,
      },
      {
        path: "/activity-calender",
        element: <ActivityCalender />,
      }
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
