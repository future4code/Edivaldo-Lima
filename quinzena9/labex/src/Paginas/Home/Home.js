import React from 'react';
import { HomeImg, LogoImg, ButtonContainer } from './styled';
import Logo from './../../Imagens/logo2.png';
import { useHistory } from 'react-router-dom';

export default function Home() {

  const history = useHistory()

  const goToListTrips = () => {
    history.push("/ListTrip")
  }

  const goToLogin = () => {
    history.push("/Login")
  }

  return (
    <div>
      <HomeImg>
        <div>
          <LogoImg src={Logo}></LogoImg>
        </div>
        <ButtonContainer>

          <button onClick={goToListTrips}>Ver Viagens</button>

          <button onClick={goToLogin}>Area Admin</button>

        </ButtonContainer>

      </HomeImg>

    </div>

  )
}


