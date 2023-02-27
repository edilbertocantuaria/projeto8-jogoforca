import { useState } from "react"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import alfabeto from "./alphabet"
import words from "./words"

export default function App(){
    const [disableInput, setDisableInput] = useState(true)
    const [disableLetter,  setDisableLetter] = useState(alfabeto)
    const [errors, setErrors]= useState(0)
    const [choosenWord, setChoosenWord] = useState([])
    const [word, setWord] = useState([])
    const [colorWord, setColorWord]=useState("inProgress")
   
    let numDashes = [];
    let auxWrong=0;

    function startGame(){
        sortWord();
        setDisableInput(false);
        setDisableLetter([]);
        setErrors(0);
        setChoosenWord([]);
        setWord([]);
        setColorWord("inProgress")


    }

    function sortWord(){
        const i = Math.floor(Math.random()*words.length)
        const word = words[i];
        console.log(word);
        console.log(word.length);
        setChoosenWord(word.split(""));
        const wordArray = word.split("");

        // let numDashes = []
        wordArray.forEach( () => numDashes.push("__ "));
        setWord(numDashes);
        console.log(numDashes.length);
    }

    function choosenLetter(letter){
        const newDisableLetter=[... disableLetter, letter];
        setDisableLetter(newDisableLetter);
        console.log(disableLetter);

       if(choosenWord.includes(letter)){
        showLetter(letter);
       }
       else{
        wrongLetter();
       } 
    }


    function showLetter(letter){
        // console.log(`input: ${letter}`)
        // console.log(`Palavra: ${choosenWord[0]}`)
        const newWord = [...word];
        for (let i=0; i<word.length; i++){
            if (letter===choosenWord[i]){
                // console.log(`Valor do i: ${i}`)
                // console.log(`Letra analisada: ${choosenWord[i]}`)
                // console.log(`Acertou: a letra do input ${letter} confere com ${choosenWord[i]}`)
                word[i]=choosenWord[i]
                verifyWinning()
            }
            else {
            }
        }
    }

    function wrongLetter(){
        const auxWrong = errors+1;
        setErrors(auxWrong);
        console.log(auxWrong);
        
        if(auxWrong===6){
            loseGame()
        }
    }

    function verifyWinning(){
        if(!word.includes("__ ")){
            const gameStatus = "win"
            setColorWord(gameStatus)
        } 
    }

    function loseGame(auxWrong){
        for (let i=0; i<word.length; i++){
            word[i]=choosenWord[i]
        }
        const gameStatus = "lose"
        setColorWord(gameStatus)
    }


    return(
        <div className="screen">
            <Jogo 
            startGame={startGame}
            errors={errors}
            word={word}
            colorWord={colorWord}
         />
            
            <Letras 
            disableLetter={disableLetter}
            choosenLetter={choosenLetter}/>
            
            <Chute 
            disableInput={disableInput} />
        </div> 
    )
}
