import React from 'react';
import { HomeImg, LogoImg, ButtonContainer, ButtonTrip, ButtonAdmin } from './styled';
import Logo from './../../Imagens/logo2.png';
import { useHistory } from 'react-router-dom';
import { goToListTrips, goToLogin } from '../../Routes/Coodinator';

export default function Home() {

  const history = useHistory()

  return (
    <div>
      <HomeImg>
        <div>
          <LogoImg src={Logo}></LogoImg>
        </div>
        <ButtonContainer>

          <ButtonTrip onClick={() => goToListTrips(history)}>Ver Viagens</ButtonTrip>

          <ButtonAdmin onClick={() => goToLogin(history)}>Area Admin</ButtonAdmin>

        </ButtonContainer>

      </HomeImg>

    </div>

  )
}


