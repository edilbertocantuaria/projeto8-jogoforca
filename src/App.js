import { useState } from "react"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import alfabeto from "./alfabeto"
import words from "./palavras"

export default function App(){
    const [disableInput, setDisableInput] = useState(true)
    const [disableLetter,  setDisableLetter] = useState(alfabeto)
    const [errors, setErrors]= useState(0)
    const [choosenWord, setChoosenWord] = useState([])
    const [word, setWord] = useState([])
    const [colorWord, setColorWord]=useState("inProgress")
    const [guessingWord, setGuessingWord]=useState("")
   
    let numDashes = [];
    let auxWrong=0

    function startGame(){
        sortWord();
        setDisableInput(false);
        setDisableLetter([]);
        setErrors(0);
        setColorWord("inProgress")
        setGuessingWord("")
    }

    function sortWord(){
        const i = Math.floor(Math.random()*words.length)
        const word = words[i];
        // console.log(word);
        setChoosenWord(word.split(""));
        const wordArray = word.split("");

        wordArray.forEach( () => numDashes.push("_ "));
        setWord(numDashes);
    }

    function choosenLetter(letter){
        const newDisableLetter=[... disableLetter, letter];
        setDisableLetter(newDisableLetter);

       if(choosenWord.includes(letter)){
        showLetter(letter);
       }
       else{
        wrongLetter();
       } 
    }

    function showLetter(letter){
        const newWord = [...word];
        for (let i=0; i<word.length; i++){
            if (letter===choosenWord[i]){
                word[i]=choosenWord[i]
                verifyWinning()
            }
            else {
            }
        }
    }

    function wrongLetter(){
        auxWrong = errors +1;
        setErrors(auxWrong);
        
        if(auxWrong===6){
            loseGame()
        }
    }

    function verifyWinning(){
        if(!word.includes("__ ")){
            for (let i=0; i<word.length; i++){
                word[i]=choosenWord[i];
            }
            const gameStatus = "win"
            setColorWord(gameStatus);
            setDisableLetter(alfabeto);
            setDisableInput(true);
        } 
    }

    function loseGame(auxWrong){
        for (let i=0; i<word.length; i++){
            word[i]=choosenWord[i];
        }
        const gameStatus = "lose";
         setColorWord(gameStatus);
         setDisableLetter(alfabeto);
         setDisableInput(true);

    }

    function guessingWholeWord(){
        let wordChoosen =""
        choosenWord.forEach(letter =>wordChoosen += letter) 
        // console.log(guessingWord)
         if (wordChoosen===guessingWord){
            for (let i=0; i<word.length; i++){
                word[i]=choosenWord[i];
            }
            const gameStatus = "win"
            setColorWord(gameStatus);
            setDisableLetter(alfabeto);
            setDisableInput(true);
         } else{
            auxWrong=6;
            setErrors(auxWrong);
            loseGame(auxWrong);
         }
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
            disableInput={disableInput} 
            guessingWord={guessingWord}
            setGuessingWord={setGuessingWord}
            guessingWholeWord={guessingWholeWord}/>
        </div> 
    )
}
