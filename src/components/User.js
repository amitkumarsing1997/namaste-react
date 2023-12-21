import { useState } from "react";
const User = (props) => {
    const [count1] = useState(1)
    const [count2] = useState(2)
    return (<div className="user-card">
        <h2>Name: {props.name}</h2>
        <h3>Location: Varanasi</h3>
        <h4>Contact: Amit@gmail.com</h4>
        <h4>Count-1 : {count1}</h4>
        <h4>Couunt-2 : {count2}</h4>
    </div>
    )
}
export default User