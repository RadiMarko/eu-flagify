import { useState } from 'react'
import './App.css'
import FlagDisplay from "./Components/FlagDisplay.jsx";
import Button from "./Components/Button.jsx";
import GuessButton from "./Components/GuessButton.jsx";

function App() {
    
    // DECLARING STATE VARIABLE FOR THE CURRENTLY PICKED FLAG
    const [pickedFlag, setPickedFlag] = useState();
    
    // DECLARING STATE VARIABLE FOR COMPARING CURRENTLY PICKED FLAG WITH USER-CLICKED GUESS BUTTON
    const [correctAnswer, setCorrectAnswer] = useState();
    
    // DECLARING ARRAY OF FLAG IMAGE PATHS
    const [flagArray, setFlagArray] = useState([
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
    ])
    
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
    
    return (
        <>
            <FlagDisplay displayedFlag={pickedFlag} />
            <Button pickRandomIndex={pickRandomIndex} />
            <div>
                <GuessButton buttonText={"albania"}></GuessButton>
                <GuessButton buttonText={"andorra"}></GuessButton>
                <GuessButton buttonText={"armenia"}></GuessButton>
                <GuessButton buttonText={"austria"}></GuessButton>
                <GuessButton buttonText={"azerbaijan"}></GuessButton>
                <GuessButton buttonText={"belarus"}></GuessButton>
                <GuessButton buttonText={"belgium"}></GuessButton>
                <GuessButton buttonText={"bosnia and herzegovina"}></GuessButton>
                <GuessButton buttonText={"bulgaria"}></GuessButton>
                <GuessButton buttonText={"croatia"}></GuessButton>
                <GuessButton buttonText={"cyprus"}></GuessButton>
                <GuessButton buttonText={"czech republic"}></GuessButton>
                <GuessButton buttonText={"denmark"}></GuessButton>
                <GuessButton buttonText={"england"}></GuessButton>
                <GuessButton buttonText={"estonia"}></GuessButton>
                <GuessButton buttonText={"finland"}></GuessButton>
                <GuessButton buttonText={"france"}></GuessButton>
                <GuessButton buttonText={"georgia"}></GuessButton>
                <GuessButton buttonText={"germany"}></GuessButton>
                <GuessButton buttonText={"great britain"}></GuessButton>
                <GuessButton buttonText={"greece"}></GuessButton>
                <GuessButton buttonText={"greenland"}></GuessButton>
                <GuessButton buttonText={"hungary"}></GuessButton>
                <GuessButton buttonText={"iceland"}></GuessButton>
                <GuessButton buttonText={"ireland"}></GuessButton>
                <GuessButton buttonText={"italy"}></GuessButton>
                <GuessButton buttonText={"kosovo"}></GuessButton>
                <GuessButton buttonText={"latvia"}></GuessButton>
                <GuessButton buttonText={"liechtenstein"}></GuessButton>
                <GuessButton buttonText={"lithuania"}></GuessButton>
                <GuessButton buttonText={"luxembourg"}></GuessButton>
                <GuessButton buttonText={"malta"}></GuessButton>
                <GuessButton buttonText={"moldova"}></GuessButton>
                <GuessButton buttonText={"monaco"}></GuessButton>
                <GuessButton buttonText={"montenegro"}></GuessButton>
                <GuessButton buttonText={"netherlands"}></GuessButton>
                <GuessButton buttonText={"north macedonia"}></GuessButton>
                <GuessButton buttonText={"norway"}></GuessButton>
                <GuessButton buttonText={"poland"}></GuessButton>
                <GuessButton buttonText={"portugal"}></GuessButton>
                <GuessButton buttonText={"romania"}></GuessButton>
                <GuessButton buttonText={"russia"}></GuessButton>
                <GuessButton buttonText={"san marino"}></GuessButton>
                <GuessButton buttonText={"scotland"}></GuessButton>
                <GuessButton buttonText={"serbia"}></GuessButton>
                <GuessButton buttonText={"slovakia"}></GuessButton>
                <GuessButton buttonText={"slovenia"}></GuessButton>
                <GuessButton buttonText={"spain"}></GuessButton>
                <GuessButton buttonText={"sweden"}></GuessButton>
                <GuessButton buttonText={"switzerland"}></GuessButton>
                <GuessButton buttonText={"turkey"}></GuessButton>
                <GuessButton buttonText={"ukraine"}></GuessButton>
                <GuessButton buttonText={"vatican"}></GuessButton>
                <GuessButton buttonText={"wales"}></GuessButton>
            </div>
        </>
    )
}

export default App
