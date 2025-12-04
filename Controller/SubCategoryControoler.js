const SUBCATEGORY=  require('../Schema/SubCategorySchema')




const addSubCategory=async(req,res)=>{

    if(!req.body.category){
        req.body.category=req.params.categoryId
    }



    const newSubCategory= new SUBCATEGORY(req.body)
    await newSubCategory.save()
    res.json({status:'sucssufully','data':newSubCategory})

}

const subCategoryes= async(req,res)=>{

    const query=req.query
    
    const limit=query.limit 
    const page=query.page 
    const skip=(page - 1)*limit

let filterObject={}
if(req.params.categoryId){
    filterObject={category:req.params.categoryId}
}

    const sub=await SUBCATEGORY.find(filterObject).limit(limit).skip(skip).populate({path:'category',select:'name -_id'})
    res.json({status:'sucssufully',result:sub.length,'data':sub})
}

const subCategory= async(req,res)=>{
    const id=req.params.id
    const subCat= await SUBCATEGORY.findById(id).populate({path:'category',select:'name -_id'})
    res.json({status:'sucssufully',result:subCat.length,'data':subCat})
}

const updateSubCategory= async(req,res)=>{
    const id =req.params.id
    const {name,category}=req.body
    const subAbdated= await SUBCATEGORY.findByIdAndUpdate({_id:id},{name,category},{new:true})
    res.json({"status":"succusfuly",data:subAbdated})
}
const deleteSubCategory= async(req,res)=>{
     const id =req.params.id
     await SUBCATEGORY.findByIdAndDelete(id)
     res.json('تم الحذف بنجاح')

}














module.exports={
    addSubCategory,
    subCategoryes,
    subCategory,
    updateSubCategory,
    deleteSubCategory
}