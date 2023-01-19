export const apiCaller=async()=>{
    var products=  fetch('http://localhost:8005/api/get-all-products')
    return await(await products).json()
  } 