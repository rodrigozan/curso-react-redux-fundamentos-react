import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/basics/Primeiro'
import ComParametro from "./components/basics/ComParametro";
import Fragmento from './components/basics/Fragmento';

import './index.css'


ReactDOM.render(
    <div>
        <Primeiro />
        <ComParametro 
            title="Segundo Componente" 
            subtitle="Go Go Power Rangers" 
        />
        <Fragmento />
    </div>, 
    document.getElementById('root')
)
