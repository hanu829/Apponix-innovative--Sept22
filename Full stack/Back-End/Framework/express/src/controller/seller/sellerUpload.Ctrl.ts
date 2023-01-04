export const  sellerUpload_Post=async(req:any,res:any)=>{
    let img=req.body.img
    let description=req.body.description
    let title=req.body.title
    let price=req.body.price
    console.log(img,description,title,price)
    
    }