import { userExits } from "../register"

const {UserRegInfo}=require('../../../models')
export const  userlogin_Post=async(req:any,res:any)=>{
var email=req.body.email
var password=req.body.password
var userExits=await UserRegInfo.findOne({email:email})
if(userExits==null){
    res.send('register')
  }else{
    res.status(200).send(200)
  }

}




// import { userExits } from "../register"

// const {UserRegInfo}=require('../../../models')
// export const  userlogin_Post=(req:any,res:any)=>{
// var email=req.body.email
// var password=req.body.password
// const logincallback=(data:boolean)=>{
// if(data==true){
//     console.log('login success')
// }else{
//     console.log('user do not exits')
// }
// }
// userExits(email,logincallback)
// res.status(200).send(200)
// }