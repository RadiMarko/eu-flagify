export default function ResultModal(props) {
    
    let scorePercentage = Math.round((props.score / 54) * 1000) / 10;
    
    return (
        <div className={props.modalShown ? "result-modal-shown" : "result-modal-hidden"}>
            <h2>Final score: {props.score} ({scorePercentage}%)</h2>
            <button 
                className="button-on" 
                style={{width: "10rem", height: "4.2rem", fontSize: "1.5rem"}}
                onClick={() => {props.toggleModal(); props.reset()}}>
                Close
            </button>
        </div>
    )
}