export default function ResetButton(props) {
    
    function handleClick(event) {
        event.target.blur(); // Prevent bug with space and enter after clicking button
        props.toggleModal();
    }
    
    return (
        <div className="reset-button-container">
            <button 
                className={props.gameStarted ? "button-on" : "button-off"} 
                onClick={handleClick}
                style={{width: "10rem", height: "4.2rem", fontSize: "1.5rem"}}>
                RESET
            </button>
        </div>
    )
}