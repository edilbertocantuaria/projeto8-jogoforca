import alfabeto from "../alphabet"

export default function Letras (props){
    const {disableLetter, choosenLetter} = props
     

    return(
        <div className="keyboard">
            {alfabeto.map (letter => 
            <button 
            className="letter" 
            key={letter} 
            data-test="letter" 
            disabled={disableLetter.includes(letter)}
            onClick={()=>choosenLetter(letter)}
             >
                {letter}
            </button>)}
        </div>
    )
}