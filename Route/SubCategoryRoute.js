 const express= require('express')
const { addSubCategory, subCategoryes, subCategory, updateSubCategory, deleteSubCategory } = require('../Controller/SubCategoryControoler')
const { get } = require('mongoose')
const { addCategoryValidator, deleteCategoryValidator } = require('../Utlies/Validator/CategoryValidator')
const { SubCategoryValidator, updateSubCategoryValidator } = require('../Utlies/Validator/SubCategoryValidator')

 const router= express.Router({mergeParams:true})


 router.route('/')
 .post(addCategoryValidator,addSubCategory)
 .get(subCategoryes)

 router.route("/:id")
 .get(SubCategoryValidator,subCategory)
 .patch(updateSubCategoryValidator,updateSubCategory)
 .delete(deleteCategoryValidator,deleteSubCategory)








 module.exports=router