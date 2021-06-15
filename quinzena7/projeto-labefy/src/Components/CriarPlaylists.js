import react from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { axiosConfig, baseUrl } from './constants'

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px;
    background-color: lightskyblue;
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 500px;
`    
const Button = styled.button`
    background-color: green;
    color: white;
    border-radius: 20px;
    border: green;
    cursor: pointer;
`
const ButtonCadastrar = styled.button`
    background-color: green;
    color: white;
    border: green;
    border-radius: 20px;
    height: 50px;
    cursor: pointer; 
`
const Input = styled.input`
    outline: none;
    padding: 15px;
    border: 2px solid #ddd;
    color: #330;
    border-radius: 6px;
    font-size: 1.0rem;
`
const Footer = styled.div`
    background-color: lightskyblue;
    position: fixed;
    bottom: 0;
    width: 100%;
`


class CriarPlaylists extends react.Component {
    state = {
        inputCadastro: ""
    }

    changeCadastro = (event) => {
        this.setState({inputCadastro: event.target.value})
    }

    fazerCadastro = () => {
        const body = {
            name: this.state.inputCadastro
        }

        axios.post (baseUrl, body, axiosConfig).then(response => {
            alert("PlayList Criada")
            this.setState ({inputCadastro: ""})
        }).catch(err => {
            alert ("Algo deu errado :(")
        })
    }
    render(){
        return (
            <div>
                <Header>
                    <h2>Labefy</h2>
                    <Button onClick={this.props.irParaPlaylist}> Ir Para Playlists </Button>
                </Header>
                <Main>
                    <h1>Criar Playlist</h1>
                    <p>Nome Playlist:</p>
                    <Input
                        placeholder="Nome da Playlist"
                        value= {this.state.inputCadastro}
                        onChange={this.changeCadastro}
                        
                    ></Input>
                    <ButtonCadastrar onClick={this.fazerCadastro}>Cadastrar Playlist</ButtonCadastrar>
                </Main>
                <Footer>
                    <p>Todos os direitos reservados</p>
                </Footer>
            </div>
        )
    }
}
export default CriarPlaylists;