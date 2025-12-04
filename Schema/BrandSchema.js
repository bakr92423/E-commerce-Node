 const mongoose= require('mongoose')


 const brandSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"يجب كتابة اسم الماركة"],
        unique:[true,"هذة الماركة موجودة بالفعل"]
    },
    slug:{
        type:String
    },
    image:{
        type:String
    }
 },{timestamps:true})




 module.exports= mongoose.model('brand',brandSchema)