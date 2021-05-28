import React from 'react';
import axios from 'axios';

class PaginaCriarUsuario extends React.Component {
  state = {
    nome:"",
    email:""
  };

  inputNome= (e) => {
    this.setState({nome: e.target.value})
  }

  inputEmail = (e) => {
    this.setState({ email: e.target.value})
  }

  criarUsuario = () => {
    const body = {
      nome: this.state.nome,
      email: this.state.email
    };

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers:{
        Authorization: 'edivaldo-vaz-munoz'
      }
    }).then((response) => {
      console.log(response.data)
    }).catch((error)=> {
        console.log(error.response.data)
    })
  }  
    
  render() {
    return (
      <div>
        <h2>Criar usuario</h2>
        <input onChange={this.inputNome} value={this.state.nome} placeholder="Nome"/>
        <input onChange={this.inputEmail} value={this.state.email} placeholder="email"/>
        <button onClick={this.criarUsuario}>Criar</button>

      </div>
      
    );
  } 
}    
export default PaginaCriarUsuario;        

    
       
      

   