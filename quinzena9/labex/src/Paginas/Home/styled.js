import styled from "styled-components";
import Img from "../../Imagens/homeback.jpg"

export const HomeImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-image: url(${Img}); */
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const LogoImg = styled.img`
  width: 700px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`