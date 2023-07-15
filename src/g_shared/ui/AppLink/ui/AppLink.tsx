import { FC } from "react";
import cls from './AppLink.module.scss';
import { classNames } from "g_shared/lib/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return <Link
    to={to}
    className={classNames(cls.link, {}, [className, cls[theme]])}
    {...otherProps}
  >
    {children}
  </Link>
}