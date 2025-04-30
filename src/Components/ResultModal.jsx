export default function ResultModal(props) {
    
    let scorePercentage = Math.round((props.score / 54) * 1000) / 10;
    
    const starArray = [
        <span style={{fontSize:"400%", color:"yellow"}}>★</span>,
        <span style={{fontSize:"400%", color:"yellow"}}>★★</span>,
        <span style={{fontSize:"400%", color:"yellow"}}>★★★</span>,
        <span style={{fontSize:"400%", color:"yellow"}}>★★★★</span>,
        <span style={{fontSize:"400%", color:"yellow"}}>★★★★★</span>
    ]
    
    function getStars(score) {
        if (score >= 50) {
            return starArray[4];
        } else if (score >= 40) {
            return starArray[3];
        } else if (score >= 30) {
            return starArray[2];
        } else if (score >= 20) {
            return starArray[1];
        } else if (score < 20) {
            return starArray[0];
        }
    }
    
    return (
        <div className={props.modalShown ? "result-modal-shown" : "result-modal-hidden"}>
            <h2 className="result-details">Final score: {props.score} flags ({scorePercentage}%)</h2>
            <span>{getStars(props.score)}</span>
            <button 
                className="button-on" 
                style={{width: "10rem", height: "4.2rem", fontSize: "1.5rem"}}
                onClick={() => {props.toggleModal(); props.reset()}}>
                Close
            </button>
        </div>
    )
}