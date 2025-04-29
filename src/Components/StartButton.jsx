export default function StartButton(props) {
    return (
        <div className="start-button-container">
            <button 
                className={`main-button ${props.gameStarted ? "button-off" : "button-on"}`}
                onClick={() => {props.startGame(); props.pickRandomIndex();}}
                style={{width: "10rem", height: "4rem", fontSize: "1.5rem"}}>
                START
            </button>
        </div>
    )
}