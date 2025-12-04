 const {check}=require('express-validator')
const validatorMidellwear = require('../../Midellweres/ValidatorMidellwere')




 exports.addCategoryValidator=[
check('name').notEmpty().withMessage('الرجاء كتابة اسم الفئة').isLength({min:2}).withMessage('لا يجب ان يكون الاسم اقل من حرفين')
.isLength({max:20}).withMessage('لا يجب ان يكون الاسم اكثر من  10 حروف'),
validatorMidellwear
    
 ]


 exports.categoryValidator=[
    check('id').isMongoId().withMessage('The Category id is Valid'),
    validatorMidellwear
 ]
 exports.categoryUpdateValidator=[
    check('id').isMongoId().withMessage('The Category id is Valid'),
    check('name').notEmpty().withMessage('الرجاء كتابة اسم الفئة').isLength({min:2}).withMessage('لا يجب ان يكون الاسم اقل من حرفين')
.isLength({max:10}).withMessage('لا يجب ان يكون الاسم اكثر من  10 حروف'),
    validatorMidellwear
 ]
 exports.deleteCategoryValidator=[
    check('id').isMongoId().withMessage('The Category id is Valid'),
    validatorMidellwear
 ]