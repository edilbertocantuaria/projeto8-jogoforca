import { useState } from "react"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import alfabeto from "./alphabet"
import words from "./words"

export default function App(){
    const [disableInput, setDisableInput] = useState(true)
    const [disableLetter, setDisableLetter] = useState(alfabeto)
    const [errors, setErrors]= useState(0)
    const [choosenWord, setChoosenWord] = useState([])
    const [word, setWord] = useState([])

   
    function startGame(){
        sortWord()
        setDisableInput(false)
        setDisableLetter([])
    }

    function sortWord(){
        const i = Math.floor(Math.random()*words.length)
        const word = words[i]
        console.log(word)
        setChoosenWord(word.split(""))
        const wordArray = word.split("")

        let numDashes = []
        wordArray.forEach( () => numDashes.push("__ "))
        setWord(numDashes)
    }

    return(
        <div className="screen">
            <Jogo 
            startGame={startGame}
            errors={errors}
            word={word}/>
            
            <Letras 
            disableLetter={disableLetter}/>
            
            <Chute 
            disableInput={disableInput} />
        </div> 
    )
}
