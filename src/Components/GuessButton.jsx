export default function GuessButton(props) {
    
    const baseClass = props.gameStarted ? "button-on" : "button-off";
    let resultClass = "";
    
    if (props.clicked) {
        resultClass = props.wasCorrect ? "button-correct" : "button-wrong";
    }
    
    return (
        
        <button className={`${baseClass} ${resultClass}`} onClick={() => props.compareUserPick(props.buttonText, props.index)}>
            {props.buttonText}
        </button>
    );
}