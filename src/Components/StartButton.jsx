export default function StartButton(props) {
    return (
        <button className={props.gameStarted ? "button-off" : "button-on"} onClick={() => {
            props.startGame(); props.pickRandomIndex();
        }}>START</button>
    )
}