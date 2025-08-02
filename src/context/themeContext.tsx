import React, { useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle } from '../GlobalStyles';
import { themes } from '../theme';
import { ThemeContext } from './contextDefinitions';

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [themeName, setThemeName] = useState(
    localStorage.getItem('theme') || 'Theme 1'
  );

  useEffect(() => {
    localStorage.setItem('theme', themeName);
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{themeName, setThemeName}}>
      <StyledThemeProvider theme={themes[themeName]}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
