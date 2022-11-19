import { useState } from "react"

interface IMyState{}
var Myarry:any=[]
export const MyState: React.FC<IMyState> = (props) => {
    var [userinput,setUserinput]=useState()
    const mychange=(e:any)=>{
        console.log(e.target.value)
        setUserinput(e.target.value)
        Myarry.push(e.target.value)
    }
    console.log(Myarry)
    var p='999'
    return<>
    <input type="text" onChange={mychange}/>

    ,<h1>{userinput}</h1>
    {Myarry.map((s:any)=>{
        return<><li>{s}</li></>
    })}
    </>
}

// function myfunction() {
//     var a = 10
//     function b(x: any) {
//         console.log(a)
//         a=x
//         console.log(a)
//     }
//     //b(23)
//     return [a,b]
// }
// var [mydat,setData]=useState()
   