import React from 'react'
import '../stylesheets/Button.css'

function Button ({ text, isClickButton, clickHandler }) {
    return (
        <button
            className={isClickButton ? 'click-button' : 'reset-button'}
            onclick={clickHandler}>
            {text}
        </button>
    )
}

export default Button;