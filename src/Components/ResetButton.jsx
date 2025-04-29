export default function ResetButton(props) {
    return (
        <div className="reset-button-container">
            <button className={props.gameStarted ? "button-on" : "button-off"} onClick={() => {props.reset()}}>RESET</button>
        </div>
    )
}