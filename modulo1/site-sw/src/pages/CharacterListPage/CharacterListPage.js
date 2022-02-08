import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PersonCard } from "../../components/CardPeople";
import { BASE_URL } from "../../constants/Url";
import { PeopleContainer } from "./styles"

export const CharacterListPage = () => {
    const [characterListPage, setCharacterListPage] = useState([]);

    const getCharacterList = () => {
        axios.get(`${BASE_URL}/people`)
        .then(({data}) => {
            setCharacterListPage(data.results)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    useEffect (() => {
        getCharacterList()
    }, [])

    return (
        <>
            <h1>ListPage</h1>
           <PeopleContainer>
                {characterListPage.map((person, i) => <PersonCard key={i} name={person.name}/>)};
            </PeopleContainer>
             <button>
                <Link to="/characterdetail">Details</Link>
            </button>
        </>
        
    );
}