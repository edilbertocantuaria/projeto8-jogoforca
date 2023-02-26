import alfabeto from "../alfabeto"

export default function Letras (props){
    const {disableLetter} = props
     

    return(
        <div className="keyboard">
            {alfabeto.map (letter => 
            <button 
            className="letter" 
            key={letter} 
            data-test="letter" 
            disabled={disableLetter.includes(letter)} >
                {letter}
            </button>)}
        </div>
    )
}