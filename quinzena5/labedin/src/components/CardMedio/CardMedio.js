import React from 'react';
import './CardMedio.css'

function CardMedio(props) {
    return (
        <div className="localizacao-container">
            <img src={ props.imagem } />
            <div>
                <p> { props.texto }</p>
            </div>
            
        </div>
    )
}

export default CardMedio;