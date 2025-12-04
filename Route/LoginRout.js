const express=require('express')
const router=express.Router()
const {Login, forgetPassword}=require('../Controller/UserController')



router.route('/')
.post(Login)
.post(forgetPassword)






module.exports=router