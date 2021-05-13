import './App.css';
import React from 'react';
import Etapa1 from "./components/etapa1"
import Etapa2 from "./components/etapa2"
import Etapa3 from "./components/etapa3"
import EtapaFinal from "./components/etapafinal"



class App extends React.Component {
  state = {
    etapa: 1

  }
  

  
     renderizarEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1/>
        case 2:
          return <Etapa2/>
        case 3:
          return <Etapa3/>
        case 4: 
          return <EtapaFinal/>
        default:
          return <EtapaFinal/>  
        
      }
    };

    proximaEtapa = () => {
      this.setState({ etapa: this.state.etapa +1})
    }



    render () {
      return (
        <div>
          {this.renderizarEtapa()}
          {this.state.etapa !== 4 && (
           <button onClick={this.proximaEtapa}>Proxima etapa</button>
          )}  
          
        </div>
        
        


        
    )
    }
      
  
    
  
}

export default App;
