import { useEffect, useState } from "react"
import { jewellarydata } from "../../api/jewellary.api"
import { Card2 } from "../../components/mycards/Card2"


interface Ijewlry { }
interface Irating {
    count: number, rate: number
}
interface Ijuewlrypro {
    category: string,
    description: string,
    id: number,
    image: string
    price: number
    rating: Irating
    title: string

}
export const Jewlry: React.FC<Ijewlry> = (props) => {
    var [localstate, setLocalstate] = useState<Ijuewlrypro[]>([])
    useEffect(() => {
        jewellarydata().then((a) => {
          console.log(a)
            setLocalstate(a)

        })
        
    }, [])


  


  
    return <>
        <h1>category:{localstate[0]?.category}</h1>
       {localstate.map((p:any) => {
        return <>
            <Card2 description={p.description} image={p.image} price={p.price} rating={p.rating} title={p.title} />
        </>
        


    })}
    </>
}