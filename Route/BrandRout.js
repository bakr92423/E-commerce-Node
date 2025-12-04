const express= require('express')
const { AddBrand, Brands, Brand, updateBrand, deleteBrand } = require('../Controller/BrandController')
const { addBrandValidator, BrandValidator, BrandUpdateValidator, deleteBrandValidator } = require('../Utlies/Validator/BrandValidator')
const router= express.Router()




router.route('/')
.post(addBrandValidator,AddBrand)
.get(Brands)


router.route('/:id')
.get(BrandValidator,Brand)
.patch(BrandUpdateValidator,updateBrand)
.delete(deleteBrandValidator,deleteBrand)














module.exports=router