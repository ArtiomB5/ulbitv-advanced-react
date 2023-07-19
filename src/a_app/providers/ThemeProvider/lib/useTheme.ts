import { useContext } from 'react'
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from './ThemeContext'

interface IUseThemeResult {
  theme?: string
  toggleTheme?: () => void
}

export const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const selectedTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    if (setTheme !== undefined) {
      setTheme(selectedTheme)
    }
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, selectedTheme)
  }

  return { theme, toggleTheme }
}
