import react from 'react'
import styled from 'styled-components'
import axios from "axios"
import { axiosConfig, baseUrl } from './constants'

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px;
    background-color: lightskyblue;
`
const PlaylistContainer = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CardPlaylist = styled.div`
    border:1px solid lightgreen;
    border-radius: 20px;
    background-color: lightgreen;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
`
const Button = styled.button`
    background-color: green;
    border: green;
    color: white;
    border-radius: 20px;
    cursor: pointer;
`
const ButtonDelete = styled.button`
    background-color: red;
    border: red;
    border-radius: 10px;
    cursor: pointer;
`
const H3 = styled.h3`
    display: flex;
    justify-content: center;
    cursor: pointer;
`
const Footer = styled.div`
    background-color: lightskyblue;
    position: fixed;
    bottom: 0;
    width: 100%;
`

class Playlists extends react.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.pegarPlaylists()
    }

    pegarPlaylists = () => {
        axios.get (baseUrl, axiosConfig).then(response => {
            this.setState({playlists: response.data.result.list})
        }).catch(err => {
            console.log(err)
        })
    }

    deletePlaylist = (playlistId) => {
        axios.delete(`${baseUrl}/${playlistId}`, axiosConfig). then (response => {
            alert("Playlist apagada :(")
            this.pegarPlaylists()
        }).catch (err => {
            console.log(err)
        }) 
    }

    render(){
        console.log(this.state.playlists)
        const listaPlaylists = this.state.playlists.map((playlist)=> {
            return <CardPlaylist 
                    key={playlist.id}>
                    {playlist.name}
                    <ButtonDelete onClick={() => this.deletePlaylist(playlist.id)}>X</ButtonDelete>
                </CardPlaylist>
        })
        return (
            <div>
                <Header>
                    <h2>Labefy</h2>
                    <Button onClick={this.props.irParaCadastro}> Ir Para Home </Button>
                </Header>
                <H3>Playlists Criadas</H3>
                <PlaylistContainer>
                    {listaPlaylists}
                </PlaylistContainer>
                <Footer>
                    <p>Todos os direitos reservados</p>
                </Footer>
                
            </div>
        )
    }
}
export default Playlists;