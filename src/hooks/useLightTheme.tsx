import React, { 
  createContext, 
  ReactNode, 
  useContext,
  useEffect,
  useState,
} from 'react';

interface LightThemeProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  isDarkTheme: boolean;
  handleThemeChange: (theme: boolean) => void;
}

const LightThemeContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function LightThemeProvider({ children }: LightThemeProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function handleThemeChange(theme: boolean) {
    localStorage.setItem('@getImageText: theme', theme.toString());
    setIsDarkTheme(theme);
  };

  useEffect(() => {
    let isDark = localStorage.getItem('@getImageText: theme') === 'true';
    setIsDarkTheme(isDark)
  }, [])

  return (
    <LightThemeContext.Provider value={{ isDarkTheme, handleThemeChange }}>
      {children}
    </LightThemeContext.Provider>
  )
}

export function useLightTheme() {
  const context = useContext(LightThemeContext);

  return context;
}