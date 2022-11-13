import React from 'react'
import '../stylesheets/Counter.css'

function Counter ({ clicksNum }) {
    return (
        <div className='counter'>
            {clicksNum}
        </div>
    )
}

export default Counter;