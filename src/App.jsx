import React from 'react';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css'; // Adjust path if needed

import HomePage from './pages/HomePage';
import AppLayout from './Components/AppLayout';
import Service from './pages/Service';
import MobileApp from './pages/MobileApp';
import SoftwearDevelopment from './pages/SoftwearDevelopment';
import Cms from './pages/Cms';
import CorporateBranding from './pages/CorporateBranding';
import DigitalMarketing from './pages/DigitalMarketing';
import TechSupport from './pages/TechSupport';
import Experties from './pages/Experties';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Estimate from './pages/Estimate';

const router = createHashRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/services', element: <Service /> },
      { path: '/services/mobile-apps', element: <MobileApp /> },
      { path: '/services/softwear-development', element: <SoftwearDevelopment /> },
      { path: '/services/cms-web', element: <Cms /> },
      { path: '/services/corporate-branding', element: <CorporateBranding /> },
      { path: '/services/digital-marketing', element: <DigitalMarketing /> },
      { path: '/services/tech-support', element: <TechSupport /> },
      { path: '/experties', element: <Experties /> },
      { path: '/work', element: <Work /> }
    ]
  },
  { path: '/contact', element: <Contact /> },
  { path: '/contact/estimation', element: <Estimate /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
