/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Primeiro from './components/basics/Primeiro'
import ComParametro from "./components/basics/ComParametro";
import Fragmento from './components/basics/Fragmento';

import './index.css'

export default _ =>
      <div>
          <h1>Fundamentos React</h1>
          <Fragmento />
          <ComParametro
            title="Passando props por parâmetros"
            sub="Go Go Power Rangers"
          />
          <Primeiro />
      </div>
