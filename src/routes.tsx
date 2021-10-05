import { Navigate } from 'react-router-dom';
import { MainLayout } from 'src/components/MainLayout';
import {
  About,
  Contact,
  Home,
  NotFound,
  Portfolio,
  PortfolioRoutes,
  Resume
} from 'src/pages';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/resume', element: <Resume /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/portfolio/:id', element: <PortfolioRoutes /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];
