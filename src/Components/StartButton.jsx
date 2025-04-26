export default function StartButton(props) {
    return (
        <button onClick={() => {
            props.startGame(); props.pickRandomIndex();
        }}>START</button>
    )
}