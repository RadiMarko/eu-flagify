export default function StartButton(props) {

    function handleClick(event) {
        event.target.blur(); // Prevent bug with space and enter after clicking button
        props.startGame();
        props.pickRandomIndex();
    }
    
    return (
        <div className="start-button-container">
            <button 
                className={`main-button ${props.gameStarted ? "button-off" : "button-on"}`}
                onClick={handleClick}
                style={{width: "10rem", height: "4.2rem", fontSize: "1.5rem"}}>
                START
            </button>
        </div>
    )
}