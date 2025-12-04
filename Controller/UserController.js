const USER=require('./../Schema/UserSchema')
const express= require('express')
const jwt=require('jsonwebtoken');
const sendEmail = require('../Utlies/SendEmail/SendEmail');






const addUser = async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
  
      // تحقق من المستخدم القديم
      const oldUser = await USER.findOne({ email });
  
      if (oldUser) {
        console.log(oldUser)
        return res.status(400).error( '📧 البريد الإلكتروني الذي أدخلته مسجل من قبل' 
    );
    
      }
  
      // إنشاء مستخدم جديد
      const newUser = new USER({ firstName, lastName, email, password });
      await newUser.save();
  
      res.status(201).json({
        status: 'success',
        data: newUser
      });
  
    } catch (error) {
      console.error('❌ خطأ في إضافة المستخدم:', error);
      res.status(500).json({ errors: [{ msg:'📧 البريد الإلكتروني الذي أدخلته مسجل من قبل'}] });
    }
  };
  

const Users= async(req,res)=>{
    const AllUseres= await USER.find()
    res.json({status:'sucssufully','length':AllUseres.length,'data':AllUseres})
}

const deleteUser= async(req,res)=>{

    const id =req.params.id
    await USER.findByIdAndDelete(id)
    res.json('تم الحذف بنجاح')

}


const Login= async(req,res)=>{

     
      const { firstName, lastName, email, password } = req.body;

      let cheeckUser= await USER.findOne({email:email})
      if(cheeckUser && password==cheeckUser.password ){

        const token= await jwt.sign({id:cheeckUser._id},process.env.JWT_SECRET,{expiresIn:process.env.EXPEER_TOKEN})
        res.json({token:token,cheeckUser})
        console.log(token);
        
    
        



      }else{
        res.status(400).json(' الرجاء من التأكد من البريد الالكتروني وكلمة السر')
      
        
        
      }

     }
      
  const Protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ message: 'No authorization header' });
  }

  const token = authHeader.split(' ')[1]; // إزالة كلمة Bearer
  
 
  const decoded= jwt.verify(token,process.env.JWT_SECRET)
  const cheeckUser= await USER.findById(decoded.id)
  if(!cheeckUser){
    return res.json('this User not exists')
  }
  req.USER=cheeckUser
  console.log(req.USER);
  

  
  
  
  // هنا ممكن تضيف كود التحقق من التوكن


  next();
};


const allowedTo= (...roles)=>
   async(req,res,next)=>{
  console.log(req.USER.role);
  
    if(!roles.includes(req.USER.role)){

      return res.json('the user not accsess rote')
    }
next()

}


const forgetPassword=async(req,res)=>{

  const user = await USER.findOne({email:req.body.email})
  if(!user){
    return res.json("البريد الالكتروني الذي ادخلته غير مسجل من قبل")
  }

  const resetCode= Math.floor(100000 + Math.random() * 900000).toString()
  console.log(resetCode);
  user.resetPasswordCode=resetCode
  user.resetPasswordExpires= Date.now() + 10*60*1000
  user.resetPasswordVerify= false;
  const text=`Hi ${user.firstName} your code "${resetCode}"`
  await user.save()
  await sendEmail({email:user.email,subject:'yourCode reset password',text})

    res.json(text)

}

const verifyCode=async(req,res)=>{

  const codeBody= req.body.resetCode
  const user= await USER.findOne({resetPasswordCode:codeBody,resetPasswordExpires:{ $gt:Date.now()} })

  if(!user){
    return res.json('الكود غير صالح')
  }
   user.resetPasswordVerify=true

   await user.save()

   res.status(200).json('تم التأكيد بنجاح')


}

const resetPassword= async(req,res)=>{

  const user= await USER.findOne({email:req.body.email})
  if(!user){
    return res.status(404).json('البريد الالكتروني الذي ادخلته غير صحيح')
  }
  if(!user.resetPasswordVerify){
    return res.status(400).json('الكود الذي ادخلته غير صحيح')
  }

  user.password=req.body.newPassword
  user.resetPasswordCode=undefined
  user.resetPasswordExpires=undefined
  user.resetPasswordVerify=false
  await user.save()

  res.status(200).json('تم تعير كلمة السر بنجاح')


}









module.exports={
    addUser,
    Users,
    deleteUser,
    Login,
    Protect,
    allowedTo,
    forgetPassword,
    verifyCode,
    resetPassword
   
}