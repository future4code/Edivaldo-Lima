import styled from "styled-components";

export const Input = styled.input`
    display: block;
    box-sizing: border-box;
    max-width: 600px;
    width: 800px;
    padding: 20px 10px;
    border-radius: 10px;
    border: 1px solid #d3e2e5;
    background-color: #f5f8fa;
    text-align: left;
`
export const Fields = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
     gap: 10px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 20px;
    margin-top: 30px;
`

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center ;
    padding: 40px;
    gap: 10px;
`

export const BackButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const BackButton = styled.button`
    font-size: 1.1rem;
    cursor: pointer;
    color: #fff;
    border-radius: 10px;
    width: 120px;
    height: 80px;
    background-color: #FF5353;
    margin: 20px;
`

export const ButtonLogin = styled.button`
    font-size: 1.1rem;
    cursor: pointer;
    color: #fff;
    border-radius: 10px;
    width: 120px;
    height: 80px;
    background-color: #FF5353;
    margin: 20px;
`

export const Title = styled.h1`
    color: slategray;
`