import React from "react";
import  { CardVideo } from "./components/cardsVideo";
import  { MenuVertical } from "./components/menuVertical";
import "./styles.css";


export default function App() {
  
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <MenuVertical
            Inicio="Inicio"
            EmAlta="Em alta"
            Inscricoes="Incrições"
            Originais="Originais"
            Historico="Histórico"
          />
          <section className="painel-de-videos">
            <CardVideo 
              Titulo="Titulo do video"
            />
            <CardVideo 
              Titulo="Titulo do video"
            />
            <CardVideo 
              Titulo="Titulo do video"
            />
            {/* <div className= {CardVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className={CardVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className={CardVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className={CardVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className={CardVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className={CardVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className={CardVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className={CardVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{titulo}</h4>
            </div> */}
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
