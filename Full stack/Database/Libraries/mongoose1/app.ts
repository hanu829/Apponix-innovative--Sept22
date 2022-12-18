require("./config/db.config")
var {User}=require('./src/models')

// var danush=new User({name:'dhanush',age:16,chocalate:'gems'})
// danush.save()
// var divya=new User({name:'divya',age:'jhsjh',chocalate:'mentose'})
// divya.save()
// User.findOne({age:15},(err:any,res:any)=>{
//     if(err)throw err
//     console.log(res)
// })
// User.deleteOne({age:15},(err:any,res:any)=>{
//     if(err)throw err
//     console.log(res)
// })

User.findOneAndUpdate({age:16},{chocalate:'germs'},(err:any,res:any)=>{
if(err)throw err;
console.log(res)
})