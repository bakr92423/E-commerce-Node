const express=require('express')
const router=express.Router()
const {verifyCode}=require('../Controller/UserController')



router.route('/')
.post(verifyCode)






module.exports=router