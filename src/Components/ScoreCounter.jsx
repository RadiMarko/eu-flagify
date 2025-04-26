export default function ScoreCounter(props) {
    return (
        <>
            {props.gameStarted ? <h2>Correct guesses: {props.score}</h2> : <h2>Click Start</h2>}
            
            <h3>(Remaining flags: {props.remaining})</h3>
        </>
    )
}