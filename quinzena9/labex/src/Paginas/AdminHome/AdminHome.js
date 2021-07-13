import React, { useState } from "react";
import { BackButtonContainer, ButtonContainer, BackButton, ButtonCreateTrip, ButtonLogout, TripContainer, TripContent, Trip, DeleteContent, Text } from "./style";
import { useHistory } from "react-router";
import { goToCreateTrip, } from "../../Routes/Coodinator";
import { useProtectedPage } from "../../Hooks/useProtectPage";
import axios from "axios";
import { useEffect } from "react";
import useRequestData from "../../Hooks/useRequestData"
import trash from "../../Imagens/trash.png"

export default function AdminHome () {
    useProtectedPage()

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const listTrips = useRequestData ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/edivaldo-vaz-munoz/trips", [])

    const deleteTrip = (id) => {
        const token = window.localStorage.getItem("token")
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/edivaldo-vaz-munoz/trips/${id}`,
                {
                    headers: {
                        auth: token,
                    },
                }
            ).then((reponse)=>{
                console.log(reponse)
            }).catch((error)=>{
                console.log(error)
            })
    }
    return (
        <div>
            <BackButtonContainer>
                <BackButton onClick={goBack}>VOLTAR</BackButton>
            </BackButtonContainer>
            <TripContainer>
                {listTrips.map((trip) =>{
                    return (
                        <TripContent>
                            <Trip>
                                <Text>{trip.name}</Text>
                            </Trip>
                            <DeleteContent>
                                <img 
                                    src={trash} 
                                    style={{width: "30px", cursor:"pointer"}}
                                    onClick={() => {deleteTrip(trip.id)
                                    }} 
                                />
                            </DeleteContent>
                        </TripContent>
                    )
                })}
               
            </TripContainer>
            <ButtonContainer>
                <ButtonCreateTrip onClick={() => goToCreateTrip(history)}>Criar Viagem</ButtonCreateTrip>
                <ButtonLogout>Encerrar Sessão</ButtonLogout>
            </ButtonContainer>
        </div>
    )
}