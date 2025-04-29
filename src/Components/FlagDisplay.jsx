export default function FlagDisplay(props) {
    return (
        <div className={props.gameStarted ? "flag-display" : "flag-display-default"}>
            <img className="flag-image" src={props.displayedFlag} alt={`The flag of ${props.displayedFlag}.`} />
        </div>
    )
}