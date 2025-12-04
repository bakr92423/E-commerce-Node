 const mongoose=require('mongoose')






 const CategorySchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        
    },
    slug:{
        type:String
    },
    image:{
        type:String
    }
 },{timestamps:true})



 module.exports=mongoose.model('category',CategorySchema)