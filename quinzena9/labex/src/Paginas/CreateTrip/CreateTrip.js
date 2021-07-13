import React, { useState } from "react";
import { BackButtonContainer, Title, Input, Select, ApplyButtonContainer, Fields, BackButton, ApplyButton } from "./style";
import { useHistory } from "react-router";
import { useProtectedPage } from "../../Hooks/useProtectPage";
import useForm from "../../Hooks/useForm"
import axios from "axios"

export default function CreateTrips () {
    useProtectedPage()
    const token = window.localStorage.getItem("token")

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const {form, onChange, clearFields} = useForm({name: "", planet:"", date:"", descripition:"", durationInDays:""})

    const create = () => {
        
        const body = form
        const token = window.localStorage.getItem("token");

        axios
            .post ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/edivaldo-vaz-munoz/trips",
            body,
            {
                headers: {
                    auth: token,
                }
            }
            ).then((response) =>{
                console.log(response.data)
            }).catch((error) =>{
                console.log(error)
            })

            
    }
    const hadleClick = (e) =>{
        e.preventDefault()
        create()
        clearFields()
    }

    return (
        <div>
            <BackButtonContainer>
                <BackButton onClick={goBack}>VOLTAR</BackButton>
            </BackButtonContainer>

            <Title>Criar Viagem</Title>
            
            
                <form onSubmit = {hadleClick}>
                    <Fields>
                        <Input 
                            required
                            name="name"
                            onChange={onChange}
                            value={form.name}
                            placeholder = "Nome"
                            type = "text"
                        />

                        <Select
                            required
                            name="planet"
                            onChange={onChange}
                            value={form.planet}
                            >
                            <option>Mercúrio</option>
                            <option>Vênus</option>
                            <option>Marte</option>
                            <option>Júpiter</option>
                            <option>Saturno</option>
                            <option>Urano</option>
                            <option>Netuno</option>
                            <option>Plutão</option>
                        </Select>

                        <Input 
                            required
                            name="date"
                            onChange={onChange}
                            value={form.date}
                            placeholder = "Data"
                            type = "date"
                        />

                        <Input
                            required
                            name="descripition"
                            onChange={onChange}
                            value={form.descripition}
                            placeholder = "Descrição"
                            type = "text"
                        />

                        <Input
                            requ
                            name="durationInDays"
                            onChange={onChange}
                            value={form.durationInDays}
                            placeholder = "Duração em dias"
                            type = "number"
                        />
                    </Fields>
                    <ApplyButtonContainer>
                        <ApplyButton>Criar Viagem</ApplyButton>
                    </ApplyButtonContainer>
                    
                </form>

                    

            
        </div>
    )
}