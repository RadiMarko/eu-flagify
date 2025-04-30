export default function ResetButton(props) {
    return (
        <div className="reset-button-container">
            <button 
                className={props.gameStarted ? "button-on" : "button-off"} 
                onClick={() => {props.reset()}}
                style={{width: "10rem", height: "4.2rem", fontSize: "1.5rem"}}>
                RESET
            </button>
        </div>
    )
}