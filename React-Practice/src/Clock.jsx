import { useEffect, useState } from "react";

function Clock()
{

    const [time,setTime] = useState(new Date().toLocaleTimeString());
    useEffect (() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
    <div className="clock">This is a Clock component
        <h2 style={{color:"green", backgroundColor:"black", width:"100px", margin:"10px", padding:"5px" }}>{time}</h2>
    </div>)
}

export default Clock;