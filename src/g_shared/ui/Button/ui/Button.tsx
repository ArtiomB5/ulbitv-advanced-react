import { classNames } from 'g_shared/lib/classNames/classNames'
import { type ButtonHTMLAttributes, type FC } from 'react'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element
  className?: string
  theme?: ThemeButton
}

export const Button: FC<IButtonProps> = (props) => {
    const { children, className = '', theme = '', ...otherProps } = props

  return <button
        {...otherProps}
        className={classNames(cls.button, {}, [className, cls[theme]])}
        type={'button'}
    >
        {children}
    </button>
}
