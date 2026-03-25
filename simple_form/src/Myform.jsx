import React from 'react'

import { useState,useEffect,useRef} from 'react';

function MyForm(){
//     form with name class age , dynamically update value on submission give alert box with details
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    function Submission(e){
        e.preventDefault()
        alert("Submitted")
    }
    return(
        <>
            <h1>Header</h1>
            <form onSubmit={Submission}>
            <label> Name : </label>
            <input type={"text"} onChange={(e)=>setName(e.target.value)}/>

            <label>Age : </label>
            <input type={"number"} onChange={(e)=>setAge(Number(e.target.value))}/>
                <button type={"submit"}>Submit</button>

                <h1>Name: {name}</h1>
                <h1>Age: {age}</h1>

            </form>
        </>
    )
}
export default MyForm