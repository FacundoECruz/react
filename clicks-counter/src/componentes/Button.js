import React from 'react'

function Boton ({ text, isClickButton, clickHandler }) {
    return (
        <button
            className={isClickButton ? 'click-button' : 'reset-button'}
            onclick={clickHandler}>
            {text}
        </button>
    )
}