import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

const initialTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT;

interface IThemeProviderProps {
  children: JSX.Element
}

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}