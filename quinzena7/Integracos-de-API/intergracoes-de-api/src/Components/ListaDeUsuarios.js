import React from 'react';
import axios from "axios";

class ListaDeUsuarios extends React.Component {
  state = {
    Usuarios: []
  }

  componentDidMount() {
    this.getAllUsers();
  }
  
  getAllUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: 'edivaldo-vaz-munoz'
      }
    }).then((reponse)=>{
      console.log(reponse.data)
    }).catch((error)=> {
      console.log(error.reponse.data)
    })
  }
  
    render () {
      const Usuario = this.state.Usuarios.map((user)=> {
        return (
          <div key={user.id}>
            <p>{user.nome}</p>

          </div>
        )
      })
      return (
        <div>
          <h2>Lista de Usuários</h2>
      </div>
    );
    }
  }
  
  export default ListaDeUsuarios;
  