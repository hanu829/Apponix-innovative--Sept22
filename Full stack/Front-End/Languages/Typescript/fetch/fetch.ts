async function mydata() {
    var data = fetch('https://fakestoreapi.com/products')
    var data2 = await (await data).json()
    console.log(data2)
    data2.map((a)=>{
console.log(a.image)
var myimg=document.createElement('img')
myimg.style.width='200px'
myimg.style.height='200px'
myimg.src=a.image
var mydiv=(document.getElementById('root') as HTMLDivElement).appendChild(myimg)
// <img src="">
    })
}
mydata()



// var myimg=document.createElement('img')
// myimg.style.width='200px'
// myimg.style.height='200px'
// myimg.src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
// var mydiv=(document.getElementById('root') as HTMLDivElement).appendChild(myimg)


// async function mydata(){
//     var data=fetch('https://fakestoreapi.com/products')
// var  data2=await (await data).json()
//     console.log(data2)
// }
// mydata()