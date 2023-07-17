import { classNames } from "g_shared/lib/classNames/classNames";
import { FC, useState } from "react"
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from "d_widgets/ThemeSwitcher";
import { LanguageSwitcher } from "d_widgets/LanguageSwitcher";

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const { className } = props;

  const mods = {
    [cls['collapsed']]: collapsed,
  }

  const toggleHandler = () => {
    setCollapsed(pv => !pv)
  }

  return <div
    className={classNames(cls.sidebar, mods, [className, cls['transition-width']])}
  >
    <button onClick={toggleHandler}>toggle</button>
    <div className={cls['switchers']}>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  </div>
}