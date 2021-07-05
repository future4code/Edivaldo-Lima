import styled from "styled-components";

export const Fields = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
    gap: 10px;
`

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
export const Select = styled.select`
    display: block;
    box-sizing: border-box;
    max-width: 600px;
    width: 100%;
    padding: 20px 10px;
    border-radius: 10px;
    border: 1px solid #d3e2e5;
    background-color: #f5f8fa;
    text-align: left;
`
export const Title = styled.h1`
    display: flex;
    justify-content: center;
    color: slategray

`

export const BackButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const ApplyButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const BackButton = styled.button`
    border-radius: 10px;
    width: 120px;
    height: 80px;
    background-color: #FF5353;
    margin: 20px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
`    
export const ApplyButton = styled.button`
    border-radius: 10px;
    width:220px;
    height: 80px;
    background-color: #FF5353;
    margin: 20px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
`