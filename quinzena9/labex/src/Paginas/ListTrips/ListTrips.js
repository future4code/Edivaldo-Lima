import React from "react";
import { ButtonContainer } from './styled'


function ListTrips() {
    return (
      <div>
        <ButtonContainer>
          <button>Voltar</button>
          <button>Increver-se</button>
        </ButtonContainer>
        <h1>Lista de Viagens</h1>
      </div>
    );
  }
  
  export default ListTrips;