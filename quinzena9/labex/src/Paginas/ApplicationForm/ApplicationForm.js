import React, { useState } from "react";
import { Fields, Input, Select, Title, BackButtonContainer, ApplyButtonContainer, BackButton, ButtonSendTrip} from "./styled"
import {useHistory} from "react-router-dom";
import axios from "axios";
import { paises } from "../../costants/paises";
import useForm from "../../Hooks/useForm";
import useRequestdata from "../../Hooks/useRequestData";


function ApplicationForm() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const {form, onChange, clearFields} = useForm({chooseTrip: "",name: "", age:"", applicationText:"", profession:"", country:""})

    const listTrips = useRequestdata ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips", [])

    const apply = () => {
        const body = form
        const id = form.chooseTrip
    }

    const applyToTrip = (e) => {
        e.preventDefault()
        

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/edivaldo-vaz-munoz/trips/${form.id}}/apply`, form
        )
        .then((response) => {
            console.log(response.data.trips)
        })
        .catch ((error) => {
            console.log(error)
        })

        clearFields();
        apply();
    }

    return (
      <div>
          <BackButtonContainer>
              <BackButton onClick={goBack}>Voltar</BackButton>
          </BackButtonContainer>
          
          <Title>Inscreva-se para uma expedição</Title>
          
            
            <form onSubmit={applyToTrip}>
                <Fields>
                    <Select
                        required
                        name="chooseTrip"
                        value={form.chooseTrip}
                        onChange={onChange}
                        >
                        <option>
                            Selecione uma viagem
                        </option>
                            {listTrips.map((trip)=> {
                                return <option value={trip.id}>{trip.name}</option>
                            })}
                    </Select>
                    <Input 
                        name= "name"
                        required
                        placeholder = "Nome"
                        onChange={onChange}
                        value ={form.name}
                        />
                    <Input
                        name = "age"
                        required
                        placeholder = "Idade"
                        onChange={onChange}
                        value ={form.age}
                    />  
                    <Input
                        name = "applicationText"
                        required
                        placeholder = "Texto de Candidatura"
                        onChange={onChange}
                        value ={form.applicationText}
                    />
                    <Input
                        name = "profession"
                        required
                        placeholder = "Profissão"  
                        onChange={onChange}
                        value ={form.profession}
                    />
                    <Select
                        name= "country"
                        required
                        placeholder= "País"
                        onChange={onChange}
                        value ={form.country}
                        >
                        <option value = "" disabled>Escolha um País </option>
                        {paises.map((pais) => {
                            return <option value={pais} key={pais}>{pais}</option>
                        })}
                    </Select> 
                </Fields> 
                <ApplyButtonContainer>
                    <ButtonSendTrip>Inscreva-se Agora </ButtonSendTrip>
                </ApplyButtonContainer>   
            </form>
          
      </div>
    );
  }
  
  export default ApplicationForm;