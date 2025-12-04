const BRAND=require('../Schema/BrandSchema')
const slugify=   require('slugify')





const AddBrand=async(req,res)=>{
   

    const newBrand= new BRAND(req.body)
     await newBrand.save()
      res.json({status:'sucssufully','data':newBrand})
}


const Brands=async(req,res)=>{

    const query=req.query
    
    const limit=query.limit 
    const page=query.page 
    const skip=(page - 1)*limit
    
    

    const brands= await BRAND.find().limit(limit).skip(skip)
     res.json({'result':brands.length,'status':'succsfuly','data':brands})
}


const Brand=async(req,res)=>{
    const id = req.params.id
    const findBrand= await BRAND.findById(id)
    if(findBrand){
     res.json({'status':'succsfuly','data':findBrand})
     
    }else{
     res.json('لايوجد نتائج')

    }

}



const updateBrand= async(req,res)=>{
    const id = req.params.id
    const {name,slug}=req.body
    const findBrand= await BRAND.findById(id)
    if(findBrand){
        const brandUpdated= await BRAND.findOneAndUpdate({_id:id},{name,slug:slugify(name)},{new:true})
        res.json({'status':'succsfuly','data':brandUpdated})
    }else{
        res.json('لايوجد نتائج')
    }

   


}


const deleteBrand=async(req,res)=>{
    const id = req.params.id
    await BRAND.findByIdAndDelete(id)
    res.json('تم الحذف بنجاح')

}














module.exports={
    AddBrand,
    Brands,
    Brand,
    updateBrand,
    deleteBrand,
}