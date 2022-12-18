import mongoose, { Schema } from "mongoose";


var userStructure=new Schema({
    name:String,
    age:Number,
    chocalate:String
})

module.exports=mongoose.model('users',userStructure)





// interface IRemote{color:string,shape:string,buttons:number}
// class Remote{
//     color:string;
//     shape:string;
//     buttons:number;
//     constructor(propes:IRemote){
//         this.color=propes.color
//         this.shape=propes.shape
//         this.buttons=propes.buttons
//     }
// }

// var epison=new Remote({color:'red',shape:'squre',buttons:3})
// var sumsunremotr:Remote