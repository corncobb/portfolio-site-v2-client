import { createTheme, ThemeProvider } from '@material-ui/core';
import React, { useReducer } from 'react';
import { useRoutes } from 'react-router-dom';
import { GlobalStyles } from 'src/components/GlobalStyles';
import { routes } from 'src/routes';
import { GlobalAppContext } from './store/global-app-context';
import { initialState, reducer } from './store/reducer';
import { Typography } from './theme/typography';

export const App = () => {
  const routing = useRoutes(routes);
  const [state, dispatch] = useReducer(reducer, initialState);

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
      </ThemeProvider>
    </GlobalAppContext.Provider>
  );
};
