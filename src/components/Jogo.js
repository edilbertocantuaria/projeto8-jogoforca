import forca0 from "../assets/forca0.png"

export default function Jogo (){
    return(
        <div className="game">
        <div className="statusGame">
            <img src={forca0} alt="forca" data-test="game-image"/>
        </div>
        <div className="left_side-Game">
            <button className="buttonChoiceWord" data-test="choose-word">
                Escolher Palavra
            </button>
            <div className="hiddenWord inProgress" data-test="word">__ __ __ __ __ __ __ __ __ __</div>
        </div>

    </div>
    )
}