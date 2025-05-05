export default function GuessButton(props) {
    
    const baseClass = props.gameStarted ? "button-on" : "button-off";
    let resultClass = "";
    
    if (props.clicked) {
        resultClass = props.wasCorrect ? "button-correct" : "button-wrong";
    }
    
    function handleClick(event) {
        event.target.blur() // Prevent bug with space and enter after clicking button
        props.compareUserPick(props.buttonText, props.index);
    }
    
    return (
        
        <button className={`${baseClass} ${resultClass}`} onClick={handleClick}>
            {props.buttonText}
        </button>
    );
}