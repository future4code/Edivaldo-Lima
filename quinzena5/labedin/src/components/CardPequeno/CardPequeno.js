import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="mail-container">
            <img src={ props.imagem } />
            <div>
                <p>{props.texto}</p>
            </div>
        </div>      
     )        
}            
        
   
export default CardPequeno;