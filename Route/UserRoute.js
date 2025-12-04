const express= require('express')
const router=express.Router()
const {addUser, Users, deleteUser, Protect, allowedTo}=require('../Controller/UserController')
const {addUserValidator, deleteUserValidator}=require('./../Utlies/Validator/UserValidator')




router.route('/')
.post(addUserValidator,addUser)
.get(Users)
 


router.route('/:id')
.delete(Protect, deleteUserValidator,deleteUser)




















module.exports=router