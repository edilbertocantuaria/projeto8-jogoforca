import { useState } from "react"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import alfabeto from "./alfabeto"

export default function App(){
    const [disableInput, setDisableInput] = useState(true)
    const [disableLetter, setDisableLetter] = useState(alfabeto)
    return(
        <div className="screen">
            <Jogo />
            <Letras disableLetter={disableLetter}/>
            <Chute disableInput={disableInput} />
        </div> 
    )
}
