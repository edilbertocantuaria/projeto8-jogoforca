export default function Chute(props){
    const {disableInput, guessingWord, setGuessingWord, guessingWholeWord} = props

    return (
        <div className="guess">
        <span>Já sei a palavra!</span>
        <input 
        data-test="guess-input" 
        disabled={disableInput} 
        value={guessingWord}
        onChange={e => setGuessingWord(e.target.value)} />
        <button className="guessWord" 
        data-test="guess-button" 
        onClick={guessingWholeWord}>Chutar</button>
    </div>
    )
}