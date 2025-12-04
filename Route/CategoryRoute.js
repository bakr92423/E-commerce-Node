 const express= require('express')
const { AddCategory, Categorys, Category, updateCategory, deleteCategory } = require('../Controller/Category')
const { addCategoryValidator, categoryValidator, categoryUpdateValidator, deleteCategoryValidator } = require('../Utlies/Validator/CategoryValidator')
 const router=  express.Router()
 const SubCategoryRout=require('../Route/SubCategoryRoute')
 const ProductRout=require('../Route/ProductRout')





 router.use('/:categoryId/subCategories',SubCategoryRout)
 router.use('/:categoryId/product',ProductRout)

 router.route('/')
 .post(addCategoryValidator,AddCategory)
 .get(Categorys)


 router.route('/:id')
 .get(categoryValidator,Category)
 .patch(categoryUpdateValidator,updateCategory)
 .delete(deleteCategoryValidator,deleteCategory)










 module.exports=router