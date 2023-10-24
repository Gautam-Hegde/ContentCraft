import React,{useEffect, useState} from 'react'
import { useNavigate} from "react-router-dom";
function Greeting() {
    const navigate=useNavigate()
    const [state,Setval]=useState(null)
    const change=()=>{
    const arr=["Hello","नमस्ते","Kon'nichiwa","Hola","Bonjour","Salaam","Szia","Ciao","Hallo'"]
    let val=0
     setInterval(() => {
            if(val===8){
                navigate("/landing")
            }
        Setval(arr[val++])
        },200);
    }
        useEffect(() => {
                change()
        }, []) // added missing comma and empty dependency array
    return (
        <div style={{fontSize:"3.75rem",color:"purple",fontWeight:"bolder",textShadow:"0 0 20px 0px purple",fontFamily:"monospace"}}>
        {state}
        </div>
    )
}

export default Greeting
