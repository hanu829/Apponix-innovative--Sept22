import { useState } from "react"
import { myapi } from "./api"

export const Myform:React.FC<{}>=()=>{
    var [name,setName]=useState()
    var [emailid,setEmailid]=useState()
    var handleNameChange=(e:any)=>{
        setName(e.target.value)

    }
    var handleEmailChange=(e:any)=>{
        setEmailid(e.target.value)
    }
    var handlsubmit=()=>{

        alert("name: "+name+'emailid :'+emailid)
        var mydat={
            url:'http://localhost:3000/posts',
            name:name!,
            emailid:emailid!
        }
        myapi(mydat)
    }
    return <>
   
<label htmlFor="">name</label>
<input  type="text" onChange={handleNameChange} name="" id="" />
<label htmlFor="">email id</label>
<input type="email" onChange={handleEmailChange} name="" id="" />
<button onClick={handlsubmit}>submit</button>
   
    </>
}