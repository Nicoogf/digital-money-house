'use client'
import React , { useState } from 'react' ;

const page = () => {
const [ menu , setMenu ] = useState( false )
const Toggle = () => {
    setMenu( !menu )
}
  return (
    <div> 
        <button onClick={Toggle}> Cambiar </button>
        <h3 className={`transition-all duration-300 translate-x-0 ${menu ? "visible" : "oculto translate-x-[300px] "}`}> { menu ? "Verdadero" : "Falso "} </h3>
    </div> 
   
  )
}

export default page