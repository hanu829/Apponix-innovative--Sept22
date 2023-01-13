var fs=require('fs')
const {ProductInfo}=require('../../models')
export const  sellerUpload_Post=async(req:any,res:any)=>{
let img=req.files.img
let description=req.body.description
let title=req.body.title
let price=req.body.price
var myfilname=req.files.img.name
fs.writeFile(`./src/public/img/${myfilname}`,req.files.img.data,()=>{
console.log('oo')

})

saveProductDetailsToDbService(description,title,price,myfilname)
res.status(200).send('uploaded')
}
const saveProductDetailsToDbService=(description:any,title:any,price:any,myfilname:any)=>{

  var basePath='http://localhost:8005/img/'
  var mydata={basePath:basePath,description:description,title:title,price:price,img_name:myfilname}
   var productdata=new ProductInfo(mydata)
   productdata.save()
}