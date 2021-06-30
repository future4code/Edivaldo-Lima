import React from "react";
import { BackButtonContainer, Title, Input, Select, ApplyButtonContainer, FormContainer } from "./style";
import { useHistory } from "react-router";

export default function CreateTrips () {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }



    return (
        <div>
            <BackButtonContainer>
                <button onClick={goBack}>VOLTAR</button>
            </BackButtonContainer>

            <Title>Criar Viagem</Title>
            
            <FormContainer>
                <form>
                    <Input 
                        placeholder = "Nome"
                        type = "text"
                    />

                    <Select>
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
                        placeholder = "Data"
                        type = "date"
                    />

                    <Input
                        placeholder = "Descrição"
                        type = "number"
                    />

                    <Input
                        placeholder = "Duração em dias"
                        type = "number"
                    />
                
                </form>
            </FormContainer>

            <ApplyButtonContainer>
                <button>Criar Viagem</button>
            </ApplyButtonContainer>
        </div>
    )
}