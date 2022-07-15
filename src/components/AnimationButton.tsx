import React, { FC } from 'react'

interface ButtonProps {
  text: string;
  className: string;
}

const AnimationButton: FC<ButtonProps> = ({text, className}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const buttonSpanRef = React.useRef<HTMLSpanElement>(null)
  
  function buttonAnimation () {
    const button = buttonRef.current
    const buttonSpan = buttonSpanRef.current

    function deleteEffectItem (effectItem: any) {
      effectItem.remove()
    }
    
    function createEffectItem (posX: any, posY: any) {
      const effectItem = document.createElement('div')

      effectItem.classList.add('effect-item')
      effectItem.style.left = `${posX}px`
      effectItem.style.top = `${posY}px` 

      if (buttonSpan !== null) {
        buttonSpan.appendChild(effectItem)
      }
      
      setTimeout(() => {
        deleteEffectItem(effectItem)
      }, 1000)
    }

    function handleButtonClick (event: any) {
      const offset = event.target.getBoundingClientRect()
      const positionX = event.pageX - offset.left
      const positionY = event.pageY - offset.top

      createEffectItem(positionX, positionY);
    }

    if (button !== null) {
      button!.addEventListener('mousedown', handleButtonClick)
    }
    
  }
  
  return (
    <button 
      onClick={() => buttonAnimation()}
      ref={buttonRef}
      className={`button ${className}`}
    >
      <span 
        ref={buttonSpanRef}
        className="span button__span"
      ></span>
      <span className="span">{text}</span>
    </button>
  )
}

export default AnimationButton