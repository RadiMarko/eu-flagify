export default function StartButton(props) {
    return (
        <button onClick={() => {
            props.pickRandomIndex();
        }}>START</button>
    )
}