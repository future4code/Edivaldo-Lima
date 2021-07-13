import styled from "styled-components";

export const BackButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const ButtonContainer = styled.div`
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
export const ButtonCreateTrip = styled.button`
    border-radius: 10px;
    width: 120px;
    height: 80px;
    background-color: #FF5353;
    margin: 20px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
`

export const ButtonLogout = styled.button`
    border-radius: 10px;
    width: 120px;
    height: 80px;
    background-color: #FF5353;
    margin: 20px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
`
export const TripContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 100px;
`

export const TripContent = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 10px;
    min-height: 160px;
    max-height: 400px;
    max-width: 400px;
    padding: 10px;
    box-sizing: border-box;
`
export const Trip = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
export const DeleteContent = styled.div`
    display: flex;
    align-items: center;
`
export const Text = styled.h3`
    color: slategray;
`