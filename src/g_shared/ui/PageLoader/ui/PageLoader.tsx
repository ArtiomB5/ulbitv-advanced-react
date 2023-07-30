import { classNames } from 'g_shared/lib/classNames/classNames'
import { type HTMLAttributes, type FC } from 'react'
import cls from './PageLoader.module.scss'

export enum ThemePageLoader {
  CLEAR = 'clear',
}

interface IPageLoaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  theme?: ThemePageLoader
}

export const PageLoader: FC<IPageLoaderProps> = (props) => {
    const { className = '', theme = '', ...otherProps } = props

  return <div
        {...otherProps}
        className={classNames(cls['page-loader'], {}, [className, cls[theme]])}
    >
        "Loading..."
    </div>
}
