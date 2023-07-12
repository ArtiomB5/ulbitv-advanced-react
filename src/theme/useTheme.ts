import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface IUseThemeResult {
    theme?: string;
    toggleTheme?: () => void;
}

export const useTheme = (): IUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const selectedTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(selectedTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, selectedTheme);
    }

    return { theme, toggleTheme }
}