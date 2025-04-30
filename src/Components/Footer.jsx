export default function Footer(props) {

    function getYear() {
        const date = new Date();
        return date.getFullYear();
    }
    
    return (
        <div className="footer">
            <p>RadiMarko</p>
            <p>{getYear()}</p>
            <button style={{color:"white"}} onClick={() => {props.toggleModal()}}>TEST MODAL</button>
        </div>
    )
}