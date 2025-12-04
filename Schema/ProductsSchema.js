 const mongoose= require('mongoose')






 const productSchema=new mongoose.Schema({
    name:{
        type:String,
        unique:[true,"لا يجب تكرار اسم المنتج"]
    },
    slug:{
        type:String,
        
    },
    price:{
        type:String,
        
    },
    image:{
        type:String,
        

        
    },
    description:{
        type:String,
    },
    quantity:{
        type:Number,
    },
    sold:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"category"
    },
    subCategory:{
        type:mongoose.Schema.ObjectId,
        ref:"subCategory"
    },
    brand:{
        type:mongoose.Schema.ObjectId,
        ref:"brand"
    }

 },{timestamps:true})

 module.exports=mongoose.model('product',productSchema)