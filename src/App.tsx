import React from 'react';
import Routes from './routes';
import { useLightTheme } from './hooks/useLightTheme';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/Theme"

import { ThemeSwitch } from './components/ThemeSwitch';

function App() {
  const { isDarkTheme } = useLightTheme();

  const themeMode = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <ThemeSwitch />
      <Routes />
    </ThemeProvider>
  )
};

export default App;
