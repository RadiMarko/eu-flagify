export default function StartButton(props) {
    return (
        <div className="start-button-container">
            <button className={props.gameStarted ? "button-off" : "button-on"} onClick={() => {
                props.startGame(); props.pickRandomIndex();
            }}>
                START
            </button>
        </div>
    )
}