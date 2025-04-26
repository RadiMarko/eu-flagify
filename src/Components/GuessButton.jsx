export default function GuessButton(props) {
    return (
        <button onClick={() => props.onClick(props.buttonText)}>{props.buttonText}</button>
    );
}