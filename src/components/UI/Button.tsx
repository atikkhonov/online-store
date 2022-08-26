import React, { FC } from 'react'

interface ButtonProps {
  text: string;
  className: string;
}

const Button: FC<ButtonProps> = ({ className, text }) => {
  return (
    <button 
      className={`button ${className}`}
    >
      <span className="span">{text}</span>
    </button>
  )
}

export default Button
