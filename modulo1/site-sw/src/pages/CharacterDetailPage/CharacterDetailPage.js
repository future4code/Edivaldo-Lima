import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/Url";
import { DetailsContainer } from "./styles"
import { Link } from "react-router-dom";


export const CharacterDetailPage = () => {
    const {id} = useParams();

    const [details, setDetails] = useState([]);
    const [planet, setPlanet] =useState([]);

    console.log(planet)

    useEffect (() => {
        axios.get(`${BASE_URL}/people/${id}`)
        .then(({data}) => {
            setDetails(data)      
        })
    },[])

    useEffect (() => {
        axios.get(`${BASE_URL}/planets/${id}`)
        .then(({data}) => {
            setPlanet(data)
        })    
    }, [])
    
    return (
        <>
            <DetailsContainer>
                <div>
                    <h1>
                        DetailPage
                    </h1>
                </div>
                
                {details.name && planet.name ? 
                    <div>
                        <p>
                            Nome: {details.name}
                        </p>
                        <p>
                            Planeta: {planet.name}
                        </p>
                    </div> :
                    
                    <p>Loading...</p>
                }
                
                <button>
                    <Link to="/">Voltar para lista de personagens</Link>
                </button>
            </DetailsContainer>
           
        </>        
    );
}