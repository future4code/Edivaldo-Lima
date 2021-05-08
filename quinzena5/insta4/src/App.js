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
  state = {
    usuario: [
      {
          nomeUsuario: 'paulinha',
          fotoUsuario: 'https://picsum.photos/50/51',
          fotoPost: 'https://picsum.photos/200/151'
      },
      {
          nomeUsuario: 'Bruno',
          fotoUsuario: 'https://i.pinimg.com/originals/c9/f5/3a/c9f53a6861e276cd9cffeabf1598da98.jpg',
          fotoPost: 'https://i.pinimg.com/originals/9f/33/3f/9f333fcf353e45752b026bcfb49824db.jpg'
      },
      {
          nomeUsuario: 'Amora',
          fotoUsuario: 'https://i.pinimg.com/564x/dc/d4/e0/dcd4e0e30645426371040dec974753c3.jpg',
          fotoPost: 'https://i.pinimg.com/736x/ce/ff/6e/ceff6e3f6f9f5ba1c7640eb6845fe46a.jpg'
      }
    ],
    valorInputNomeUsuario: "",
    valorInputImagemUsuario: "",
    valorInputImagemPost: ""
  };
  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputImagemUsuario,
      fotoPost: this.state.valorInputImagemPost
    }
    const novosPosts = [...this.state.usuario, novoPost];
    this.setState({ usuario: novosPosts })
  }
  onChangeInputNome = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value});
  }
  onChangeInputFoto = (event) => {
    this.setState({valorInputImagemUsuario: event.target.value});
  }
  onChangeInputPost = (event) => {
    this.setState({valorInputImagemPost: event.target.value});
  }
  render() {
    const componenteUsuario = this.state.usuario.map((usuario) => {
      return (
        <Post
        nomeUsuario={usuario.nomeUsuario}
        fotoUsuario={usuario.fotoUsuario}
        fotoPost={usuario.fotoPost}
        />
      );
    });
    return (
      <div>
      <MainContainer>
        <input
          value={this.state.valorInputNomeUsuario}
          onChange={this.onChangeInputNome}
          placeholder={"Nome do usuário"}
        />
        <input
          value={this.state.valorInputImagemUsuario}
          onChange={this.onChangeInputFoto}
          placeholder={"Foto do Perfil"}
        />
        <input
          value={this.state.valorInputImagemPost}
          onChange={this.onChangeInputPost}
          placeholder={"Link do Post"}
        />
        <button onClick={this.adicionarPost}>Adicionar Post</button>
        {componenteUsuario}
      </MainContainer>
    </div>
    );
  }
}

  
export default App;
