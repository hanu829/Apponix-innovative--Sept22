import { MyH1, MyState } from "../../components"
import { Rating1 } from "../../components/mui/Rating1"

// interface Itest{
//     a:string
// }
// const Test:React.FC<Itest>=(props)=>{
//    console.log(props.a) 
//     //alert('hello')
//     return <></>
// }

// function test(a:object){
//    // alert(a)
//     console.log(a)
   
// }
export  const Home=()=>{
//test()
return (<>
<h1>my topics </h1>
<ol>
    <li><MyState/></li>
    <li><Rating1></li>
</ol>


<MyH1 a={"hello"} bg={"blue"}/></>)
}