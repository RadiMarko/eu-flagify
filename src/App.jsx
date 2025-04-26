import { useState } from 'react'
import './App.css'
import FlagDisplay from "./Components/FlagDisplay.jsx";
import StartButton from "./Components/StartButton.jsx";
import GuessButton from "./Components/GuessButton.jsx";
import ScoreCounter from "./Components/ScoreCounter.jsx";
import ResetButton from "./Components/ResetButton.jsx";

function App() {
    
    const initialArray = [
        "/albania.svg",
        "/andorra.svg",
        "/armenia.svg",
        "/austria.svg",
        "/azerbaijan.svg",
        "/belarus.svg",
        "/belgium.svg",
        "/bosnia and herzegovina.svg",
        "/bulgaria.svg",
        "/croatia.svg",
        "/cyprus.svg",
        "/czech republic.svg",
        "/denmark.svg",
        "/england.svg",
        "/estonia.svg",
        "/finland.svg",
        "/france.svg",
        "/georgia.svg",
        "/germany.svg",
        "/great britain.svg",
        "/greece.svg",
        "/greenland.svg",
        "/hungary.svg",
        "/iceland.svg",
        "/ireland.svg",
        "/italy.svg",
        "/kosovo.svg",
        "/latvia.svg",
        "/liechtenstein.svg",
        "/lithuania.svg",
        "/luxembourg.svg",
        "/malta.svg",
        "/moldova.svg",
        "/monaco.svg",
        "/montenegro.svg",
        "/netherlands.svg",
        "/north macedonia.svg",
        "/norway.svg",
        "/poland.svg",
        "/portugal.svg",
        "/romania.svg",
        "/russia.svg",
        "/san marino.svg",
        "/scotland.svg",
        "/serbia.svg",
        "/slovakia.svg",
        "/slovenia.svg",
        "/spain.svg",
        "/sweden.svg",
        "/switzerland.svg",
        "/turkey.svg",
        "/ukraine.svg",
        "/vatican.svg",
        "/wales.svg"
    ]
    
    // DECLARING STATE VARIABLE FOR THE CURRENTLY PICKED FLAG
    const [pickedFlag, setPickedFlag] = useState();
    
    // DECLARING STATE VARIABLE FOR COMPARING CURRENTLY PICKED FLAG WITH USER-CLICKED GUESS BUTTON
    const [correctAnswer, setCorrectAnswer] = useState();
    
    // DECLARING STATE VARIABLE FOR SCORE COUNTER VARIABLE
    const [scoreCounter, setScoreCounter] = useState(0)
    
    // DECLARING STATE VARIABLE FOR GAME STATUS
    const [gameStarted, setGameStarted] = useState(false);
    
    // DECLARING STATE ARRAY OF FLAG IMAGE PATHS
    const [flagArray, setFlagArray] = useState([...initialArray])
    
    // FUNCTION FOR STARTING GAME
    function startGame() {
        setGameStarted(true);
    }
        
    // FUNCTION FOR PICKING RANDOM FLAG AND REMOVING IT FROM THE ARRAY OF FLAGS, THEN SETTING FLAG STATE VARIABLE
    function pickRandomIndex() {
        setFlagArray((prevFlagArray) => {
            
            // Random number generator (and using it to pick flag by index)
            const randomIndex = Math.floor(Math.random() * flagArray.length);
            const selectedFlag = prevFlagArray[randomIndex];
            
            console.log(`Index picked: ${randomIndex}`);
            console.log(`Flag picked: ${selectedFlag}`);
            
            // Removing selected flag from the array
            const newFlagArray = [...prevFlagArray];
            newFlagArray.splice(randomIndex, 1);
            
            console.log(`New flag array with a length of ${newFlagArray.length} (about to be set):\n${newFlagArray}`);
            
            // Setting the state variable of the currently selected flag
            setPickedFlag(selectedFlag)
            
            // Setting the state variable of the correct answer to be compared to user-selected answer
            const cleanCountryName = selectedFlag.replace("/", "").replace(".svg", "")
            setCorrectAnswer(cleanCountryName)
            console.log(`CORRECT ANSWER TO BE SET: ${cleanCountryName}`)
            
            return newFlagArray;
        })
    }
    
    function compareUserPick(pickedText) {
        console.log(`User picked: ${pickedText}`);
        if (pickedText === correctAnswer) {
            console.log("Correct answer!!!")
            setScoreCounter((prevScoreCounter) => prevScoreCounter + 1)
        } else {
            console.log("Wrong answer!!!")
        }
        pickRandomIndex();
    }
    
    function reset() {
        setPickedFlag("/european union.svg")
        setCorrectAnswer()
        setScoreCounter(0)
        setGameStarted(false)
        setFlagArray([...initialArray])
    }
    
    return (
        <>
            <ScoreCounter score={scoreCounter} remaining={flagArray.length} gameStarted={gameStarted}></ScoreCounter>
            <FlagDisplay displayedFlag={flagArray.length === 54 ? "/european union.svg" : pickedFlag}></FlagDisplay>
            <StartButton startGame={startGame} pickRandomIndex={pickRandomIndex}></StartButton>
            <div className={"button-area"}>
                <GuessButton buttonText={"albania"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"andorra"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"armenia"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"austria"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"azerbaijan"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"belarus"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"belgium"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"bosnia and herzegovina"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"bulgaria"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"croatia"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"cyprus"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"czech republic"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"denmark"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"england"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"estonia"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"finland"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"france"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"georgia"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"germany"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"great britain"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"greece"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"greenland"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"hungary"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"iceland"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"ireland"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"italy"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"kosovo"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"latvia"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"liechtenstein"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"lithuania"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"luxembourg"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"malta"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"moldova"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"monaco"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"montenegro"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"netherlands"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"north macedonia"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"norway"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"poland"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"portugal"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"romania"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"russia"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"san marino"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"scotland"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"serbia"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"slovakia"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"slovenia"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"spain"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"sweden"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"switzerland"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"turkey"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"ukraine"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"vatican"} onClick={compareUserPick}></GuessButton>
                <GuessButton buttonText={"wales"} onClick={compareUserPick}></GuessButton>
            </div>
            <ResetButton reset={reset}></ResetButton>
        </>
    )
}

export default App
