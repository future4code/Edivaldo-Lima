import React from 'react';
import "./styles.css"


export default function CardPeople(props) {
  return (
      <div className='card'> 
        <ul>
            <li>Nome: {props.name}</li>
            <li>Altura: {props.height}</li>
            <li>Peso: {props.mass}</li>
            <li>Cabelos: {props.hair_color}</li>
            <li>Olho: {props.eye_color}</li>
            <li>Aniversário {props.birth_year}</li>
            <li>Genero: {props.gender}</li>
        </ul>
      </div>
  );
}