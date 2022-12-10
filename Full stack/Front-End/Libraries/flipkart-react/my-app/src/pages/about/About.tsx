export const About:React.FC<{}>=(props)=>{
    parent()
    return <>
    <Pa>
    <Chi/>
    <Chi2/>
    </Pa>
    
    </>
}
const Pa=(props:any)=>{
    return <>
    <h1>hello1234</h1>
    <h1>hello1234</h1>
    <h1>hello1234</h1>
    {props.children}
    </>
}
const Chi=()=>{
    return <>gg1</>
}
const Chi2=()=>{
    return <>gg2</>
}




function parent(){
    console.log('im parent')
    var mon=10
    child1(mon)
    child2(mon)
}
function child1(a:any){
console.log('im child1',a)
}

function child2(a:any){
    console.log('im child2',a)
}