export default function Letras (){
    return(
        <div className="keyboard">
            {alfabeto.map (letter => <button className="letter abled" key={letter} data-test="letter">
                {letter}
                </button>)}
        </div>
    )
}
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
