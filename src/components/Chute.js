export default function Chute(props){
    const {disableInput} = props

    return (
        <div className="guess">
        <span>Já sei a palavra!</span>
        <input data-test="guess-input" disabled={disableInput} />
        <button className="guessWord" data-test="guess-button">Chutar</button>

    </div>
    )
}