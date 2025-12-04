const mongoose=   require('mongoose')




const UserSchema= new mongoose.Schema({
    firstName:{
        type:String,

    },
    lastName:{
        type:String,

    },
    email:{
        type:String,
        unique:true

    },
    password:{
        type:String,

    },
    resetPasswordCode:{
        type:String
    },
    resetPasswordExpires:{
        type:Date
    },
    resetPasswordVerify:{
        type:Boolean
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    active:{
        type:Boolean,
        default:true
    }


},{timestamps:true})

module.exports=mongoose.model('user',UserSchema)