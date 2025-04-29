export default function GuessButton(props) {
    return (
        <button className={props.gameStarted ? "button-on" : "button-off"} onClick={() => props.onClick(props.buttonText)}>{props.buttonText}</button>
    );
}