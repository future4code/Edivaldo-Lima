import React from "react"




class Etapa1 extends React.Component {
  

    render () {
        return (
            <div>
                <h1>Etapa 1 - Dados Gerais</h1>
                <p> 1. Qual seu nome?</p>
                <input></input>

                <p>2. Qual sua idade?</p>
                <input></input>

                <p>3.Qual seu email?</p>
                <input></input>
                
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                </select>
                <br/>
                <br/>
                
            </div>
        )
    }
}

export default Etapa1