import React from 'react'
import ReactDOM from 'react-dom'

const tag = <p>Olá <strong>React</strong>!!!</p>

ReactDOM.render(
    <div>
        { tag }
    </div>, 
    document.getElementById('root')
)
