import { useState , useEffect } from "react";
 
function StudentForm(props)
{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [rollNo,setRollNo] = useState("");

    useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailValue)
        setRollNo(props.rollNoValue)
    },[props.nameValue,props.emailValue,props.rollNoValue]);


    const arr = [name,email,rollNo];  //[Raj,raj@gmail.com,1]

    const handleClick = () =>{
        props.getState(arr);
    }

    return(
        <div style={{maxWidth:"60%",margin:"0px auto"}}>
            <input onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your name" />
            <input onChange={(event)=>setEmail(event.target.value)} class="form-control my-3" placeholder="Enter your email" />
            <input onChange={(event)=>setRollNo(event.target.value)} class="form-control my-3" placeholder="Enter your roll number" />
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}

export default StudentForm;