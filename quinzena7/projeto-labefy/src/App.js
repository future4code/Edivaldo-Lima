import react from 'react'
import styled from 'styled-components'
import CriarPlaylists from './Components/CriarPlaylists'
import Playlists from './Components/Playlists'


class App extends react.Component {
  state = {
    pagina: "criarPlaylist"
  }
  
  renderizarPagina = () => {
    switch (this.state.pagina) {
      case "criarPlaylist":
        return <CriarPlaylists irParaPlaylist={this.irParaPlaylist}/>
      case "listaPlaylist": 
        return <Playlists irParaCadastro={this.irParaCadastro}/>
      default:
        return <div></div>;  
    } 
  }

  irParaCadastro = () => {
    this.setState({pagina: "criarPlaylist"})
  }

  irParaPlaylist = () => {
    this.setState({pagina: "listaPlaylist"})
  }

  render () {
    return (
      <div>
        {this.renderizarPagina()}
      </div>
  );
  }
}

export default App;
