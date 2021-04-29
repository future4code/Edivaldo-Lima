import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemEmail from './components/CardPequeno/CardPequeno';
import ImagemLocalizacao from './components/CardMedio/CardMedio';


const 

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://ca.slack-edge.com/TLAVDH7C2-U01P9NLGQRW-c5e61345454e-48" 
          nome="Edivaldo Vaz" 
          descricao="Olá, me chamo Edivaldo Vaz, tenho 27 anos. Sou estudante de front-end na instituição Labenu."
        />
        
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="Mail">
        <ImagemEmail
          imagem= "https://img2.gratispng.com/20180328/gie/kisspng-email-logo-irregular-exposure-showroom-fashion-a-circle-5abb3e7b5154c5.4368389815222206673331.jpg" 
          texto= "E-mail: edivaldo.vaz@hotmail.com"
          />
      </div>  

      <div className="Localizacao">
        <ImagemLocalizacao
          imagem= "https://img2.gratispng.com/20180412/uaq/kisspng-location-logo-map-location-icon-5acf46c34e1e98.97124583152353350732.jpg"
          texto= "Endereço: Qr 506 CJ 7 - Samambaia - DF"
          />

      </div>
      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/proxy/0dU4cRNZ3FfJ-3JD9MAuC4ufvkve94L3VH35yJqaHramh8sMIPoWPiDmved2OnnQTehiwfOfA5WJGR90gV1RWrZylw5ZHTtI1-Xz_yeOYU-fw4uy" 
          nome="Real Expresso" 
          periodo= "2014 - 2018"
          descricao="Fechamento de saldos das agências, cobranças, atendimento ao cliente, conciliação de extrato bancário" 
        />
        
        <CardGrande 
          imagem="https://rodoviariaonline.com.br/wp-content/uploads/2020/06/logo-viacao-catedral.png" 
          nome="Catedral Turismo" 
          periodo="2018 - 2020"
          descricao="Fechamento de saldos das agências, cobranças, atendimento ao cliente, conciliação de extrato bancário." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
