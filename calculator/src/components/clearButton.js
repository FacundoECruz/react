import React from 'react'
import '../stylesheets/ClearButton.css'

const ClearButton = (props) => (
    <div className='clear-button'>
        {props.children}
    </div>
)

export default ClearButton;