import { createTheme, Fab, ThemeProvider } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React, { useEffect, useReducer } from 'react';
import { useRoutes } from 'react-router-dom';
import { GlobalStyles } from 'src/components/global-styles';
import { routes } from 'src/routes';
import { ScrollTop } from './components/scroll-top';
import { StartConsoleLog } from './components/start-console-log';
import { GlobalAppContext } from './store/global-app-context';
import { initialState, reducer } from './store/reducer';
import { Typography } from './theme/typography';

export const App = () => {
  const routing = useRoutes(routes);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    StartConsoleLog();
  }, []);

  const theme: any = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: state.isDarkMode ? 'dark' : 'light',
          grey: {
            900: '#000000'
          },
          background: {
            default: '#ffffff',

            paper: state.isDarkMode ? '#000000' : '#ffffff'
          },
          primary: {
            // contrastText: '#ffffff',
            main: '#0000ed'
          },
          secondary: {
            main: '#c7c7c7'
          }

          // text: {
          //   primary: '#172b4d',
          //   secondary: '#6b778c'
          // }
        },
        overrides: {
          // MuiDrawer: {
          //   paper: {
          //     backgroundColor: state.isDarkMode ? '#212121' : '#fff'
          //   }
          // },
          MuiButton: {
            label: {
              textTransform: 'none'
            }
          }
        },
        typography: Typography
      }),
    [state.isDarkMode]
  );

  return (
    <GlobalAppContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
        <ScrollTop>
          <Fab color="primary" size="medium" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </GlobalAppContext.Provider>
  );
};
