 const {check}=require('express-validator')
const validatorMidellwear = require('../../Midellweres/ValidatorMidellwere')



 exports.addBrandValidator=[
check('name').notEmpty().withMessage('الرجاء كتابة اسم الماركة').isLength({min:2}).withMessage('لا يجب ان يكون الاسم اقل من حرفين')
.isLength({max:10}).withMessage('لا يجب ان يكون الاسم اكثر من  10 حروف'),
validatorMidellwear
    
 ]


 exports.BrandValidator=[
    check('id').isMongoId().withMessage('خطاء في رقم التعريف'),
    validatorMidellwear
 ]
 exports.BrandUpdateValidator=[
    check('id').isMongoId().withMessage('خطاء في رقم التعريف'),
    check('name').notEmpty().withMessage('الرجاء كتابة اسم الماركة').isLength({min:2}).withMessage('لا يجب ان يكون الاسم اقل من حرفين')
.isLength({max:10}).withMessage('لا يجب ان يكون الاسم اكثر من  10 حروف'),
    validatorMidellwear
 ]
 exports.deleteBrandValidator=[
    check('id').isMongoId().withMessage('خطاء في رقم التعريف'),
    validatorMidellwear
 ]