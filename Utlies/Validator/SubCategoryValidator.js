 const {check}=require('express-validator')
const validatorMidellwear = require('../../Midellweres/ValidatorMidellwere')



exports.addSubCategoryValidator=[
    check('name').notEmpty().withMessage('الرجاء كتابة الاسم').isLength({min:3}).isLength({max:10}),
    check('category').notEmpty().withMessage('الرجاء اسم الفئة'),
    validatorMidellwear

    
]
exports.SubCategoryValidator=[
    check('id').isMongoId().withMessage('خطاء في ال id').notEmpty().withMessage('الرجاء كتابة ال مفتاح'),
     validatorMidellwear
]
exports.updateSubCategoryValidator=[
    check('id').isMongoId().withMessage('خطاء في ال id').notEmpty().withMessage('الرجاء كتابة ال مفتاح'),
     validatorMidellwear
]
exports.deleteSubCategoryValidator=[
    check('id').isMongoId().withMessage('خطاء في ال id').notEmpty().withMessage('الرجاء كتابة ال مفتاح'),
     validatorMidellwear
]