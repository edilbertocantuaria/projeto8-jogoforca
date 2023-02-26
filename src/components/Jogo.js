import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"

export default function Jogo (props){
    const {startGame, errors, word} = props
    const imagesForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];


    return(
        <div className="game">
        <div className="statusGame">
            <img src={imagesForca[errors]} alt="forca" data-test="game-image"/>
        </div>
        <div className="left_side-Game">
            <button className="buttonChoiceWord" data-test="choose-word" onClick={startGame}>
                Escolher Palavra
            </button>
            <div className="hiddenWord inProgress" data-test="word">{word}</div>
        </div>

    </div>
    )
}