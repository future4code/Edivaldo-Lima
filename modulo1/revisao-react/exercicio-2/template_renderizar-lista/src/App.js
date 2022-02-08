import { useState } from "react";
import "./styles.css";
import { data } from "./data/data";
import CardName from "./components/CardName/index.jsx"
import CardPeople from "./components/CardPeople";

export default function App() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState([]);
  const [height, setHeight] = useState([]);
  const [mass, setMass] = useState([]);
  const [hair, setHair] = useState([]);
  const [eye, setEye] = useState([]);
  const [birth, setBirth] = useState([]);
  const [gender, setGender] = useState([]);
  
 
  const renderiza = () => {
    setPeople(data);
  };

  const lista = people.map((item) => {
    return(
      <CardName name= {item.name} />
    )
  });

  return (
    <div className="App">
      <h1>Renderização de lista</h1>
      <button onClick={renderiza}>Renderiza lista</button>
      <div className="List">
        <ul>
          {lista}
        </ul>
      </div>

      <h1>Cards Personagens</h1>

     <CardPeople 
        name="Luke Skywalker"
        height="172"
        mass="77"
        hair_color="blond"
        eye_color="blue"
        birth_year="19BBY"
        gender="Male"
     />

    </div>
  );
}
