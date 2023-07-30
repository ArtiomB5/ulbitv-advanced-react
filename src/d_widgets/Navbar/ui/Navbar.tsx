import { classNames } from "g_shared/lib/classNames/classNames"
import { FC } from "react"
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "g_shared/ui/AppLink"
import { useTranslation } from "react-i18next"

interface INavbarProps {
  className?: string
}
export const Navbar: FC<INavbarProps> = (props) => {
  const { className = '' } = props;
  const { t } = useTranslation("navbar");
  return <div className={classNames(cls.navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>{t("Главная")}</AppLink>
      <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>{t("О нас")}</AppLink>
    </div>
  </div>
}