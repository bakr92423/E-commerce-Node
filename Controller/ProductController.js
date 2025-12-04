  const slugify = require('slugify')
const PRODUCT= require('../Schema/ProductsSchema')





  const addProduct=async(req,res)=>{
    req.body.slug=slugify(req.body.name)
    const newPro= new PRODUCT(req.body)
     await newPro.save()
      res.json({status:'sucssufully','data':newPro})
  }

  const Products= async(req,res)=>{

    

        const query=req.query
        const limit=query.limit 
        const page=query.page 
        const skip=(page - 1)*limit

                let filterObject={}
if(req.params.categoryId){
    filterObject={category:req.params.categoryId}
}
        
        // filter
         const queryStringObj={...req.query}
        let queryStr=JSON.stringify(queryStringObj)
           queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match)=>`$${match}`);
           const par=JSON.parse(queryStr)
          

            console.log(par);
            
         // filter

        


        let mongooseQuery=  PRODUCT.find(filterObject)
        .limit(limit).skip(skip).populate({path:"category",select:"name -_id"})
        .populate({path:"subCategory",select:"name -_id"}).populate({path:"brand",select:"name -_id"})







          // sort
          
          if(req.query.sort){
            const sortBy=req.query.sort.split(',').join('')
            mongooseQuery=mongooseQuery.sort(sortBy)
          }
          // sort
          // search
          if(req.query.keyWord){
            const query={}
            query.$or=[
                {name:{$regex:req.query.keyWord,$options:'i'}},
                {description:{$regex:req.query.keyWord,$options:'i'}}
            ]
             mongooseQuery= mongooseQuery.find(query)
          }
          // search

    
        const productes= await mongooseQuery

         res.json({'result':productes.length,'status':'succsfuly','data':productes})
  }

  const Product =async(req,res)=>{
      const id = req.params.id
      const product= await PRODUCT.findById(id)
      if(product){
       res.json({'status':'succsfuly','data':product})
       
      }else{
       res.json('لايوجد نتائج')
  
      }
  
  }
  const updateProduct= async(req,res)=>{
      const id = req.params.id
      const findPro= await PRODUCT.findById(id)
      if(findPro){
          const productUpdated= await PRODUCT.updateOne({_id:id},{$set:{...req.body}})
          res.json({'status':'succsfuly','data':"done"})
      }else{
          res.json('لايوجد نتائج')
      }
  }
  
  const deleteProduct=async(req,res)=>{
      const id = req.params.id
      await PRODUCT.findByIdAndDelete(id)
      res.json('تم الحذف بنجاح')
  
  }



  module.exports={
    addProduct,
    Products,
    Product,
    updateProduct,
    deleteProduct

  }