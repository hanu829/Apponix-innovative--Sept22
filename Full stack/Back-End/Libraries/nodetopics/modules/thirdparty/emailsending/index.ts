var nodemailer=require('nodemailer')
var transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'hanamantarenad565@gmail.com',
        pass:'my password'
    }
})
var maildata={
    from:'hanamantarenad565@gmail.com',
    to:'daluleelavathi@gmail.com',
    subject:'testing u r awake',
text:'hi can u dance'
}
transport.sendMail(maildata,(err:any,res:any)=>{
    if(err){
        console.log(err)
    }else{
        console.log('mail send')
    }
})