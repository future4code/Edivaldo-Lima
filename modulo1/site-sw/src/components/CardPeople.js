import styled from "styled-components";

export const CardPeopleContainer = styled.div`
    width: 300px;
    height: 100px;
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PersonCard = ({name}) => {
    return (
        <CardPeopleContainer>
            <h3>{name}</h3>
        </CardPeopleContainer>
    )
}