import { styled } from '@material-ui/core';
import { Outlet } from 'react-router-dom';
import { MainNavbar } from './navigation/main-navbar';

const MainLayoutRoot = styled('div')(({ theme }) => ({
  // backgroundColor: theme.palette.background.paper,
  display: 'flex',
  height: '100%',
  // overflow: 'hidden',
  width: '100%'
}));

export const MainLayout = () => (
  <MainLayoutRoot>
    <MainNavbar>
      <Outlet />
    </MainNavbar>
  </MainLayoutRoot>
);
