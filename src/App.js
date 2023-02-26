import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"

export default function App(){

    return(
        <div className="screen">
            <Jogo />
            <Letras />
            <Chute />
        </div> 
    )
}
