export default function ScoreCounter(props) {
    return (
        <>
            <h2>Correct guesses: {props.score}</h2>
            <h3>(Remaining flags: {props.remaining})</h3>
        </>
    )
}