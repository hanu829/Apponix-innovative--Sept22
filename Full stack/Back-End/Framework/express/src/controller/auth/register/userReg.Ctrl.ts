const {UserRegInfo}=require('../../../models')
export const  userReg_Post=async(req:any,res:any)=>{
var name=req.body.name
var email=req.body.email
var password=req.body.password
var userExits=await UserRegInfo.findOne({email:email})
console.log("userExits",userExits)
if(userExits==null){
  savingUserInfoService(name,email,password)
  res.status(200).send(200)
}else{
  res.send('exits')
}

}

const savingUserInfoService=(name:any,email:any,password:any)=>{
var userReg=new UserRegInfo({name,email,password})
userReg.save()
}

export const userExits=(email:any,callback:Function)=>{
   var user= UserRegInfo.findOne({email:email},(err:any,res:any)=>{
          if(err){
        console.log(err)     
          }
          if(res==null){
            callback(false)
          }else{
            callback(true)
          }
        })
}


















// const {UserRegInfo}=require('../../../models')
// export const  userReg_Post=(req:any,res:any)=>{
// var name=req.body.name
// var email=req.body.email
// var password=req.body.password
// const myval=(data:boolean)=>{
//      data
//      if(data==true){
//        console.log('already user registered')
//      }else{
//         savingUserInfoService(name,email,password)
//      }
// }
// res.status(200).send(200)
// }

// const savingUserInfoService=(name:any,email:any,password:any)=>{
// var userReg=new UserRegInfo({name,email,password})
// userReg.save()
// }

// export const userExits=(email:any,callback:Function)=>{
//    var user= UserRegInfo.findOne({email:email},(err:any,res:any)=>{
//           if(err){
//         console.log(err)     
//           }
//           if(res==null){
//             callback(false)
//           }else{
//             callback(true)
//           }
//         })
// }