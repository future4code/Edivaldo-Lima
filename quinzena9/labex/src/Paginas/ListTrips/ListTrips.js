import React from "react";
import { useHistory } from 'react-router-dom';
import { goToApplicationForm, goToCreateTrip } from "../../Routes/Coodinator"
import { TripContainer, TripContent, BackButtonContainer, BackButton, ButtonTripNow, Title, ButtonContainer } from "./styled";
import useRequestdata from "../../Hooks/useRequestData";

function ListTrips() {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }
  
  const listTrips = useRequestdata(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/edivaldo-vaz-munoz/trips", []
  );

 console.log(listTrips)
  
  return (
    <div>
        <BackButtonContainer>
          <BackButton onClick={goBack}>VOLTAR</BackButton>
        </BackButtonContainer>
        <Title><h1>Lista de Viagens</h1></Title>
          <TripContainer>
            {listTrips.map((trip) =>{
              return(
                <TripContent>
                  <h2>{trip.name}</h2>
                  <p>{trip.description}</p>
                </TripContent>
              )
            })}
          </TripContainer>
        <ButtonContainer>
          <ButtonTripNow 
            onClick={() => goToApplicationForm(history)}>VIAJE AGORA!
          </ButtonTripNow>
        </ButtonContainer>
    </div>
  );
}
  
  export default ListTrips;

  