export default function FlagDisplay(props) {
    return (
        <div className="flag-display">
            <img className="flag-image" src={props.displayedFlag} alt={`The flag of ${props.displayedFlag}.`} />
        </div>
    )
}