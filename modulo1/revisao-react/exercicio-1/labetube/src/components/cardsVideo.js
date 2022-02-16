import "./styles.css"

export const CardVideo = (props) => {
    return (
            <div>
                <img src="https://picsum.photos/400/400">{props.img}</img>
                <h4>{props.Titulo}</h4>
            </div>  
    ) 
}
