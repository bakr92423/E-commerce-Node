 const express= require('express')
const { addProduct, Products, Product, updateProduct, deleteProduct } = require('../Controller/ProductController')
const { addProductValidator, ProductValidator, updateProductValidator, deletProductValidator } = require('../Utlies/Validator/ProductValidator')
 const router= express.Router({mergeParams:true})


 router.route('/')
 .post(addProductValidator,addProduct)
 .get(Products)

 router.route('/:id')
 .get(ProductValidator,Product)
 .patch(updateProductValidator,updateProduct)
 .delete(deletProductValidator,deleteProduct)






 module.exports=router