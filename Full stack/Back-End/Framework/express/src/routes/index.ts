const homeRoute=require('./home/home.routes')
const register=require('./auth/registration/userReg.routes')
const userlogin=require('./auth/login/login.routes')
const sellerUploadProduct=require('./seller/sellerUpload.routes')
const getAllProducts=require('./seller/getallProducts.routes')

module.exports={homeRoute,register,userlogin,sellerUploadProduct,getAllProducts}