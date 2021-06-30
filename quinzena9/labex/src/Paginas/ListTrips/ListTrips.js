import React from "react";
import { useHistory } from 'react-router-dom';

function ListTrips() {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }
  
  const goToApplicationForm = () => {
    history.push("/ApplicationForm")
  
}
  
    return (
      <div>
        <div>
          <h1>Lista de Viagens</h1>
          <button onClick={goBack}>VOLTAR</button>
          <button onClick={goToApplicationForm}>VIAJE AGORA!</button>
        </div>
      </div>
    );
  }
  
  export default ListTrips;