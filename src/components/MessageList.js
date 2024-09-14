import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import Message from "../components/Message";

var message = [
    { image: image1,
        name: "Jessica Koel", 
        message: "Hey, Joel, I here to help you out please...", 
        time: "11:26" },
    { image: image2, 
        name: "Komeial Bolger", 
        message: "I will send you all documents as soon a...", 
        time: "12:26" },
    { image: image3, 
        name: "Tamaara Suiale", 
        message: "Are you going to business trip next week", 
        time: "8:26" },
    { image: image4, 
        name: "Sam Nielson", 
        message: "I suggest to start new business soon", 
        time: "7:16" },
    { image: image5, 
        name: "Caroline Nexon", 
        message: "We need to start new research center.", 
        time: "9:26" },
    { image: image6, 
        name: "Patrick Koeler", 
        message: "May be yes", 
        time: "3:26" }
];

function MessageList() {
    return (
        <>
            {message.map((item) => {
                return <Message image={item.image} name={item.name} message={item.message} time={item.time}/>
            })}
        </>
    );
}

export default MessageList;