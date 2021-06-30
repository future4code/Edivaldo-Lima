import React from "react";
import { Input, ButtonContainer, LoginContainer, BackButtonContainer} from "./styled";
import { useHistory } from "react-router";

export default function Login () {

    const history = useHistory()

    const goToAdminHome = () => {
        history.push("/AdminHome")
    }

    const goBack = () => {
        history.goBack()
    }


    return (
        <div>
            <BackButtonContainer>
                <button onClick={goBack}>VOLTAR</button>
            </BackButtonContainer>
            <LoginContainer>
                
                <h1>Login</h1>
                <form>
                    <Input 
                        placeholder = "Email"/>
                
                    <Input
                        placeholder = "Senha"/>
                </form>

                <ButtonContainer>
                    <button onClick={goToAdminHome}>Login</button>
                </ButtonContainer>
            </LoginContainer>
        </div>
    )   
}