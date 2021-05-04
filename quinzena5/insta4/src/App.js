import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={"Bruno"}
          fotoUsuario={'https://i.pinimg.com/originals/c9/f5/3a/c9f53a6861e276cd9cffeabf1598da98.jpg'}
          fotoPost={'https://i.pinimg.com/originals/9f/33/3f/9f333fcf353e45752b026bcfb49824db.jpg'}
        />
        <Post
          nomeUsuario={'Amora'}
          fotoUsuario={'https://i.pinimg.com/564x/dc/d4/e0/dcd4e0e30645426371040dec974753c3.jpg'}
          fotoPost={'https://i.pinimg.com/736x/ce/ff/6e/ceff6e3f6f9f5ba1c7640eb6845fe46a.jpg'} 
        />  
      </MainContainer>
    );
  }
}

export default App;
