import { useTheme } from "a_app/providers/ThemeProvider";
import { classNames } from "g_shared/lib/classNames/classNames";
import { FC } from "react";
import cls from './ThemeSwitcher.module.scss';
import ThemeDarkSVG from 'g_shared/assets/icons/theme-dark.svg';
import ThemeLightSVG from 'g_shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from "g_shared/ui/Button";

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return <Button
    onClick={toggleTheme}
    className={classNames(cls['theme-switcher'], {}, [className])}
    theme={ThemeButton.CLEAR}
  >
    <>{theme === 'dark' ? <ThemeDarkSVG /> : <ThemeLightSVG />}</>
  </Button>
}