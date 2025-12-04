const CATEGORY=require('../Schema/CategorySchema')
const slugify=   require('slugify')





const AddCategory=async(req,res)=>{
   req.body.slug=slugify(req.body.name)

    const newCat= new CATEGORY(req.body)
     await newCat.save()
      res.json({status:'sucssufully','data':newCat})
}


const Categorys=async(req,res)=>{

    const query=req.query
    
    const limit=query.limit 
    const page=query.page 
    const skip=(page - 1)*limit

    const categoryes= await CATEGORY.find().limit(limit).skip(skip)
     res.json({'result':categoryes.length,'status':'succsfuly','data':categoryes})
}


const Category=async(req,res)=>{
    const id = req.params.id
    const category= await CATEGORY.findById(id)
    if(category){
     res.json({'status':'succsfuly','data':category})
     
    }else{
     res.json('لايوجد نتائج')

    }

}



const updateCategory= async(req,res)=>{
    const id = req.params.id
    const findCat= await CATEGORY.findById(id)
    if(findCat){
        const categoryUpdated= await CATEGORY.updateOne({_id:id},{$set:{...req.body}})
        res.json({'status':'succsfuly','data':"done"})
    }else{
        res.json('لايوجد نتائج')
    }

   


}


const deleteCategory=async(req,res)=>{
    const id = req.params.id
    await CATEGORY.findByIdAndDelete(id)
    res.json('تم الحذف بنجاح')

}














module.exports={
    AddCategory,
    Categorys,
    Category,
    updateCategory,
    deleteCategory
}