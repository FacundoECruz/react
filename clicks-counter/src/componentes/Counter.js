import React from 'react'

function Counter ({ clicksNum }) {
    return (
        <div className='contador'>
            {clicksNum}
        </div>
    )
}

export default Counter;