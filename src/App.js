import { useState } from "react"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import alfabeto from "./alphabet"

export default function App(){
    const [disableInput, setDisableInput] = useState(true)
    const [disableLetter, setDisableLetter] = useState(alfabeto)
    const [errors, setErrors]= useState(6)

   
    function startGame(){
        setDisableInput(false)
        setDisableLetter([])
    }

    return(
        <div className="screen">
            <Jogo 
            startGame={startGame}
            errors={errors}/>
            
            <Letras 
            disableLetter={disableLetter}/>
            
            <Chute 
            disableInput={disableInput} />
        </div> 
    )
}
