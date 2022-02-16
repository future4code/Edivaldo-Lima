import "./styles.css"

export const MenuVertical = (props) => {
    return (
       <div>
            <nav >
                <ul>
                    <li>{props.Inicio}</li>
                    <li>{props.EmAlta}</li>
                    <li>{props.Inscricoes}</li>

                    <hr />
                    
                    <li>{props.Originais}</li>
                    <li>{props.Historico}</li>
                </ul>
          </nav>  
    </div> 
    )
    
}