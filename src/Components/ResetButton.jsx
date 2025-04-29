export default function ResetButton(props) {
    return (
        <button className={props.gameStarted ? "button-on" : "button-off"} onClick={() => {props.reset()}}>RESET</button>
    )
}