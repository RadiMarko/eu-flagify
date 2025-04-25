import { useState } from 'react'
import './App.css'
import FlagDisplay from "./Components/FlagDisplay.jsx";
import Button from "./Components/Button.jsx";

function App() {
    
    // DECLARING STATE VARIABLE FOR THE CURRENTLY PICKED FLAG
    const [pickedFlag, setPickedFlag] = useState();
    
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
        "/european union.svg",
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
            
            return newFlagArray;
        })
    }
    
    return (
        <>
            <FlagDisplay displayedFlag={pickedFlag} />
            <Button pickRandomIndex={pickRandomIndex}></Button>
        </>
    )
}

export default App
