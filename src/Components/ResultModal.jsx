export default function ResultModal(props) {
    return (
        <div className={props.modalShown ? "result-modal-shown" : "result-modal-hidden"}>
            <h2>Final score: 27 (50%)</h2>
            <button 
                className="button-on" 
                style={{width: "10rem", height: "4.2rem", fontSize: "1.5rem"}}
                onClick={props.toggleModal}>
                Close
            </button>
        </div>
    )
}