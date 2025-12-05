  const express= require('express')
  const app= express()
  const ROUTER= require('./Route/CategoryRoute')
  const SUB= require('./Route/SubCategoryRoute')
  const BRAND= require('./Route/BrandRout') 
  const UPLOAD= require('./Route/Upload') 
  const USERROUT=require('./Route/UserRoute') 
  const PRODUCT= require('./Route/ProductRout') 
  const LOGIN= require('./Route/LoginRout') 
  const FORGET= require('./Route/ForgetPassword') 
  const RESETPASSWORD= require('./Route/resetPassword') 
  const VERIFYCODE= require('./Route/verifyResetCode') 
  const mongoose= require('mongoose')
    const cors= require('cors')
    const cookieParser = require('cookie-parser');
  require('dotenv').config()
  app.use(express.json())
app.use(cors());
 
  





    app.use('/api/category',ROUTER)
    app.use('/api/brand',BRAND)
    app.use('/api/subcategory',SUB)
    app.use('/api/product',PRODUCT)
    app.use('/api/user',USERROUT)
    app.use('/api/forgetPasword',FORGET)
    app.use('/api/resetPassword',RESETPASSWORD)
    app.use('/api/verifyResetCode',VERIFYCODE)
    app.use('/api/upload',UPLOAD)
    app.use('/api/login',LOGIN)

  














let URL=process.env.URLDB
let port=process.env.PORT

mongoose.connect(URL).then(()=>{
    console.log('the database start');
    
})



    app.listen(port||4000,()=>{
        console.log('the SERVER starting');
        
    })



