import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';


const CardContainer = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CardInterno = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardFooter = styled.div`
    display: flex;
    justify-content: space-around;
`


export default function Home(props) {
  const [profile, setprofile] = useState([]);
  const [choose, setChoose] = useState("");

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`
      )
      .then((res) => {
        setprofile(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const choosePerson = () => {
    const body = { id: profile.id, choice: true };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person",
        body
      )
      .then((res) => {
        setChoose(res.data);
        alert("Você deu um match");
        getProfile();
      })
      .catch((err) => {
        console.log(err);
        alert("Ocorreu um problema");
      });
  };

  return (
    <CardContainer>
        <button onClick={() => {props.change("Match");}}>Veja seus Matchs</button>

      <CardInterno>
        <img
          src={profile.photo}
          alt={"Foto do perfil"}
          style={{ width: "300px" }}
        />
        <div>
          <h2>{profile.name} </h2>
          <h2>{profile.age} </h2>
          <h4>{profile.bio}</h4>
        </div>
        </CardInterno>
      
      <CardFooter>
          <ThumbDownAltIcon style={{ fontSize: 50}} onClick={() => {getProfile();}}>Pular</ThumbDownAltIcon>
          <ThumbUpAltIcon style={{ fontSize: 50}} onClick={() => {choosePerson();}}>Dar Match</ThumbUpAltIcon>
        </CardFooter>
    </CardContainer>
  );
}