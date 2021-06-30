import React from "react";
import { BackButtonContainer, ButtonContainer } from "./style";
import { useHistory } from "react-router";


export default function AdminHome () {

    const history = useHistory()

    const goToCreateTrips = () => {
        history.push("/CreateTrip")
    }

    const goBack = () => {
        history.goBack()
    }


    return (
        <div>
            <BackButtonContainer>
                <button onClick={goBack}>VOLTAR</button>
            </BackButtonContainer>
            <ButtonContainer>
                <button onClick={goToCreateTrips}>Criar Viagem</button>
                <button>Encerrar Sessão</button>
            </ButtonContainer>
        </div>
    )
}