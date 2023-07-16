import { classNames } from "g_shared/lib/classNames/classNames"
import { FC } from "react"
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "g_shared/ui/AppLink"
import { ThemeSwitcher } from "d_widgets/ThemeSwitcher"

interface INavbarProps {
  className?: string
}
export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;
  return <div className={classNames(cls.navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>Main page</AppLink>
      <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About page</AppLink>
    </div>
  </div>
}