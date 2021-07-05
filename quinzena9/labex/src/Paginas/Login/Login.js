import React from "react";
import { Fields ,Input, ButtonContainer, LoginContainer, BackButtonContainer, BackButton, ButtonLogin, Title} from "./styled";
import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";
import useForm from "../../Hooks/useForm";



export default function Login () {

    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    
    const {form, onChange, clearFields} = useForm({email:"", password:""})


    const onSubmitLogin = (e) => {
        e.preventDefault()

        console.log(form)
    
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/edivaldo-vaz-munoz/login', form
        )
        .then ((reponse) => {
        console.log('Deu certo',reponse.data.token)
        localStorage.setItem("token", reponse.data.token)    
        history.push("/admin")
        })
        .catch ((error) => {
        console.log("Deu ruim", error)

        clearFields()
    })
    }      
    

    return (
        <div>
            <BackButtonContainer>
                <BackButton onClick={goBack}>VOLTAR</BackButton>
            </BackButtonContainer>
            
            <LoginContainer>    
                <Title>Login</Title>
                <form onSubmit={onSubmitLogin}>
                    <Fields>
                        <Input
                            name="email"
                            required
                            onChange={onChange} 
                            value = {form.email}
                            placeholder = "Email"
                            type="email"
                            />
                            
                    
                        <Input
                            name="password"
                            required
                            onChange={onChange}
                            value= {form.password}
                            type= "password"
                            placeholder = "Senha"
                            />
                    </Fields>
                    <ButtonContainer>
                        <ButtonLogin>ENTRAR</ButtonLogin>
                    </ButtonContainer>    
                </form>
            </LoginContainer>
                
            
        </div>
    )   
}