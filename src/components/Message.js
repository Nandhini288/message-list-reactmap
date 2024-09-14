function Message(props) {
    return (
        <div className="message-container">
            <img src={props.image} alt="img"/>
            <section className="section">
                <div className="message">
                    <h3>{props.name}</h3>
                    <p>{props.message}</p>
                </div>
                <div className="time">
                    <p>{props.time}</p>
                    <i class='bx bxs-star'/>
                </div>
            </section>
        </div>
    );
}
export default Message;