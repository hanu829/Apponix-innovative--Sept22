import { useEffect, useState } from "react"
import { jewellarydata } from "../../api/jewellary.api"
import { Card2 } from "../../components/mycards/Card2"


interface Ijewlry{}
export const Jewlry:React.FC<Ijewlry>=(props)=>{
    var [localstate,setLocalstate]=useState([])
    useEffect(()=>{
        jewellarydata().then((a)=>{
            setLocalstate(a)
           
        })
    },[])
    
   console.log(localstate)
    return <>
    <h1>category:</h1>
    <Card2 description={"kkk"} image={"ll"} price={0} rating={{count:7,rate:6}} title={"mm"}/>
    </>
}