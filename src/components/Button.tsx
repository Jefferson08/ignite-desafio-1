import { ButtonHTMLAttributes } from 'react'
import Icon from 'phosphor-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: Icon.IconProps
}
export const Button = ({ text, icon, ...props }: ButtonProps) => {
  return (
    <button
      className="p-4 text-sm leading-5 font-bold text-center inline-flex items-center gap-2 text-white bg-blue-dark rounded-lg hover:bg-blue focus:none focus:outline-none"
      {...props}
    >
      {text}

      {icon && <>{icon}</>}
    </button>
  )
}
