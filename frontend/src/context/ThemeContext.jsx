import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider ({ children }) {

  const [theme, setTheme] = useState('blue');

  const changeTheme = (color) => {
    document.documentElement.setAttribute('data-theme', color);
    setTheme(color);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};