export default function Button(props) {
    return (
        <button onClick={() => {
            props.pickRandomIndex();
        }}>CLICKKKK</button>
    )
}