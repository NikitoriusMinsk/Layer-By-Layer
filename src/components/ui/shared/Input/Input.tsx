import cn from 'clsx'
import s from './Input.module.css'
import React, { InputHTMLAttributes } from 'react'


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onChange?: (...args: any[]) => any
  type?: string
  bsSize?: string
  valid?: boolean
  icon?: any
  invalid?: boolean
  placeholder?: string
  innerRef?: object | Function | string
  plaintext?: boolean
  addon?: boolean
  cssModule?: object
  disabled?: boolean
}

const Input: React.FC<InputProps> = (props) => {
  const { className, children, placeholder, onChange, disabled, icon, ...rest } = props

  const rootClassName = cn(s.root, icon ? s.inputIcon : '', className)

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }

  return (
    <label className="w-full h-full relative" >
     {icon ? <div className={s.icon}>{icon}</div> : ''}
      <input
        className={rootClassName}
        onChange={handleOnChange}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        disabled={disabled}
      />
    </label>
  )
}

export default Input
