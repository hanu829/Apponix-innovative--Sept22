const {ProductInfo}=require('../../models')

export const getallProducts_Get=async(req:any,res:any)=>{
    console.log("k-----",await getAllItemService())
    res.send(await getAllItemService())
}
const getAllItemService=async()=>{
    var data=await ProductInfo.find({})
// console.log(data)
return data
}