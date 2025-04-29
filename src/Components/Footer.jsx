export default function Footer() {

    function getYear() {
        const date = new Date();
        return date.getFullYear();
    }
    
    return (
        <div className="footer">
            <p>RadiMarko</p>
            <p>{getYear()}</p>
        </div>
    )
}