 const mongoose= require('mongoose')





 const SubCategorySchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true

    },
    category:{
        type: mongoose.Schema.ObjectId,
        ref:"category"

    }

 },{timestamps:true})




 module.exports=mongoose.model('subCategory',SubCategorySchema)