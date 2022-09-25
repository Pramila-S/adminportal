import React, { useEffect } from "react";
import {useState} from "react"

function Demo() {
    useEffect(() => {
    console.log("Hello");

    fetch("${env.api}/users").then(() => {
console.log("Fetch")
    })
}, [])

useEffect(() => {
return () => {
    console.log("Destroy");
}
}, [] )

const [timer, setTimer] = useState(0);

useEffect(() => {
       console.log("Timer update"); 
        }, [timer] )

 return (
    <div>
<button onClick = {() => setTimer(timer + 1)}>+</button>
{timer}
<button onClick = {() => setTimer(timer - 1)}>-</button>
 </div>
 );
}
export default Demo;