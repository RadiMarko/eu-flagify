import { useState } from 'react'
import './App.css'
import FlagDisplay from "./Components/FlagDisplay.jsx";
import StartButton from "./Components/StartButton.jsx";
import GuessButton from "./Components/GuessButton.jsx";
import ScoreCounter from "./Components/ScoreCounter.jsx";
import ResetButton from "./Components/ResetButton.jsx";
import Footer from "./Components/Footer.jsx";
import ResultModal from "./Components/ResultModal.jsx";

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
        "/vatican city.svg",
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
    
    // DECLARING STATE VARIABLE TO DETERMINE WHETHER MODAL SHOULD BE SHOWN OR NOT
    const [modalShown, setModalShown] = useState(false);
    
    // DECLARING STATE VARIABLE FOR INDEX OF CLICKED GUESSBUTTON
    const [clickedIndex, setClickedIndex] = useState();
    
    // DECLARING STATE VARIABLE TO FIND OUT WHETHER CLICK WAS CORRECT OR NOT
    const [wasAnswerCorrect, setWasAnswerCorrect] = useState();
    
    // DECLARING STATE ARRAY OF FLAG IMAGE PATHS
    const [flagArray, setFlagArray] = useState([...initialArray])
    
    // FUNCTION FOR STARTING GAME
    function startGame() {
        setGameStarted(true);
    }
    
    // ARRAY OF CLEAN COUNTRY NAMES (GUESSBUTTONS COMPONENTS MAP OVER THIS FOR BUTTONTEXT DISPLAY)
    
    const cleanCountryNames = [
        "albania",
        "andorra",
        "armenia",
        "austria",
        "azerbaijan",
        "belarus",
        "belgium",
        "bosnia and herzegovina",
        "bulgaria",
        "croatia",
        "cyprus",
        "czech republic",
        "denmark",
        "england",
        "estonia",
        "finland",
        "france",
        "georgia",
        "germany",
        "great britain",
        "greece",
        "greenland",
        "hungary",
        "iceland",
        "ireland",
        "italy",
        "kosovo",
        "latvia",
        "liechtenstein",
        "lithuania",
        "luxembourg",
        "malta",
        "moldova",
        "monaco",
        "montenegro",
        "netherlands",
        "north macedonia",
        "norway",
        "poland",
        "portugal",
        "romania",
        "russia",
        "san marino",
        "scotland",
        "serbia",
        "slovakia",
        "slovenia",
        "spain",
        "sweden",
        "switzerland",
        "turkey",
        "ukraine",
        "vatican city",
        "wales"
    ]
                
    // FUNCTION FOR PICKING RANDOM FLAG AND REMOVING IT FROM THE ARRAY OF FLAGS, THEN SETTING FLAG STATE VARIABLE
    function pickRandomIndex() {
        setFlagArray((prevFlagArray) => {
            
            // Random number generator (and using it to pick flag by index)
            const randomIndex = Math.floor(Math.random() * flagArray.length);
            const selectedFlag = prevFlagArray[randomIndex];
            
            // Removing selected flag from the array
            const newFlagArray = [...prevFlagArray];
            newFlagArray.splice(randomIndex, 1);
            
            // Setting the state variable of the currently selected flag
            setPickedFlag(selectedFlag)
            
            // Setting the state variable of the correct answer to be compared to user-selected answer
            const cleanCountryName = selectedFlag.replace("/", "").replace(".svg", "")
            setCorrectAnswer(cleanCountryName)
            
            return newFlagArray;
        })
    }
    
    // FUNCTION FOR COMPARING USER PICK TO CORRECT ANSWER AND INCREASING SCORE
    function compareUserPick(pickedText, index) {
        if (pickedText.toLowerCase() === correctAnswer) {
            setScoreCounter((prevScoreCounter) => prevScoreCounter + 1)
        } else {
            setClickedIndex(index);
        }

        // Setting wasAnswerCorrect and also clicked index state variable to the index of the clicked GuessButton
        setWasAnswerCorrect(pickedText.toLowerCase() === correctAnswer)
        setClickedIndex(index);
        
        // Setting wasAnswerCorrect and ClickedIndex to null after a brief time
        setTimeout(() => {
            setClickedIndex(null);
            setWasAnswerCorrect(null);
        }, 300)
        
        // Checking whether next flag should be picked or the game should restart if array is empty
        if (flagArray.length > 0) {
            pickRandomIndex();
        } else {
            reset();
        }

    }
    
    // FUNCTION FOR TOGGLING HIGH SCORE MODAL AT GAME'S END OR WHEN CLICKING RESTART BUTTON
    function toggleModal() {
        setModalShown(prevModalShown => !prevModalShown);
    }
    
    // FUNCTION TO RESET GAME
    function reset() {
        setPickedFlag("/european union.svg")
        setCorrectAnswer()
        setScoreCounter(0)
        setGameStarted(false)
        setFlagArray([...initialArray])
    }
    
    return (
        <div className="game-area">
            <ScoreCounter score={scoreCounter} remaining={flagArray.length} gameStarted={gameStarted}></ScoreCounter>
            <FlagDisplay gameStarted={gameStarted} displayedFlag={flagArray.length === 54 ? "/european union.svg" : pickedFlag}></FlagDisplay>
            <div className="main-buttons">
                <StartButton startGame={startGame} pickRandomIndex={pickRandomIndex} gameStarted={gameStarted}></StartButton>
                <ResetButton reset={reset} gameStarted={gameStarted}></ResetButton>
            </div>
            <ResultModal modalShown={modalShown} toggleModal={toggleModal}></ResultModal>
            <div className={"button-area"}>
                {cleanCountryNames.map((countryName, index) => (
                    <GuessButton 
                        key={index} 
                        index={index}
                        buttonText={countryName.split(" ").map(word =>
                        {
                            if (word === "and") {
                                return word;
                            } else {
                                return word.charAt(0).toUpperCase() + word.slice(1);
                            }
                        }).join(" ")} 
                        compareUserPick={compareUserPick} 
                        gameStarted={gameStarted} 
                        clicked={clickedIndex === index}
                        wasCorrect={wasAnswerCorrect}
                    >
                    </GuessButton>
                ))}
            </div>
            <Footer toggleModal={toggleModal}></Footer>
        </div>
    )
}

export default App
