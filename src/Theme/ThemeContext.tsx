import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  nightMode: boolean;
  setNightMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [nightMode, setNightMode] = useState<boolean>(true);

  return (
    <ThemeContext.Provider value={{ nightMode, setNightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
