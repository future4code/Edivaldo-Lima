import styled from "styled-components";

export const TripContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 100px;
`    
export const TripContent = styled.div`
    border: 1px solid #338899;
    border-radius: 10px;
    min-height: 280px;
    min-width: 300px;
    max-height: 500px;
    max-width: 400px;
    padding: 10px;
`

export const BackButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const BackButton = styled.button`
    border-radius: 10px;
    width: 120px;
    height: 80px;
    background-color: #FF5353;
    margin: 20px;
    cursor: pointer;
    color: #fff;
    font-size: 1.1rem;
`

export const ButtonTripNow = styled.button`
    border-radius: 10px;
    width: 520px;
    height: 80px;
    background-color: #FF5353;
    color: #fff;
    font-size: 2.1rem;
    cursor: pointer;
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    color: slategray;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`