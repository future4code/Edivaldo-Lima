import React from 'react';
import ListaDeUsuarios from "./Components/ListaDeUsuarios"
import PaginaCriarUsuario from "./Components/PaginaCriarUsuario"
import axios from "axios"

class App extends React.Component {
  state = {
    pagina: "criarUsuario"
  };

  proximaPagina = () => {
    if (this.state.pagina === "criarUsuario") {
      this.setState({pagina: "listaUsuario"})
    }else if (this.state.pagina === "listaUsuario") {
      this.setState({pagina: "criarUsuario"})
    }
  }
  
  renderizarPagina = () => {
    switch (this.state.pagina) {
      case "criarUsuario":
        return <PaginaCriarUsuario/>
      case "listaUsuario":
        return <ListaDeUsuarios/>
      default:
        return <div></div>;  
    }
  }

  render () {
    return (
      <div>
        <h1>Labenusers</h1>
        <button onClick={this.proximaPagina}> Trocar de pagina </button>       
        {this.renderizarPagina()}       
    </div>
  );
  }
}

export default App;
