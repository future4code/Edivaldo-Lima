import React from 'react'
import styled from 'styled-components';
import { ButtonContainer, H1, Button } from './styled'


function Home() {
  return (
    <div>
      <H1>LabeX</H1>
      <ButtonContainer>
          <Button>Ver Viagens</Button>
          <Button>Fazer Login</Button>
      </ButtonContainer>
    </div>
  );
}

export default Home;