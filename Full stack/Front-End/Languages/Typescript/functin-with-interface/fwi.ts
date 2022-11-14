function marragies(props:Imarragies){console.log(props)}
marragies({gift1:'watch',gift2:100})
marragies({gift1:'watch'})

interface Imarragies{
    gift1:string,
    gift2?:number
}