import React from "react";
import { FormContainer, Input, Select, Title, BackButtonContainer, ApplyButtonContainer } from "./styled"
import {useHistory} from "react-router-dom"


function ApplicationForm() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
      <div>
          <BackButtonContainer><button onClick={goBack}>Voltar</button></BackButtonContainer>
          
          <Title>Inscreva-se para uma expedição</Title>
          <FormContainer>
            
            <form>
                <Select>
                    <option>asdf</option>
                </Select>
                <Input 
                    placeholder = "Nome"/>
                <Input
                    placeholder = "Idade" />  
                <Input
                    placeholder = "Texto de Candidatura" />
                <Input
                    placeholder = "Profissão"  />
                <Select>
                    <option>1</option>
                </Select>     
            </form>
          </FormContainer>
          <ApplyButtonContainer>
              <button>Inscreva-se Agora </button>
          </ApplyButtonContainer>
      </div>
    );
  }
  
  export default ApplicationForm;