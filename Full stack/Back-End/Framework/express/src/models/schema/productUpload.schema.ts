import mongoose, { Schema } from "mongoose";


var productStructure=new Schema({
    description:String,
    title:String,
    price:String,
    img_name:String,
    basePath:String,
})

module.exports=mongoose.model('ProductInfo',productStructure)