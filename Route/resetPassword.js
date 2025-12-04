const express=require('express')
const router=express.Router()
const {resetPassword}=require('../Controller/UserController')



router.route('/')
.patch(resetPassword)






module.exports=router