const {check}=  require('express-validator')
const validatorMidellwear = require('../../Midellweres/ValidatorMidellwere')



exports.addProductValidator=[
    check('name').notEmpty().withMessage('يجب كتابة اسم النتج').isLength({min:3}).withMessage('لا يجب ان يكون اسم المنتج اقل من 3 حروف')
    .isLength({max:20}).withMessage('لا يجب ان يكون اسم المنتج اكثر من 20 حروف'),
    check('price').notEmpty().withMessage('يجب كتابة سعر النتج').isLength({min:2}).withMessage('لا يجب ان يكون سعر المنتج اقل من 2 حروف')
    .isLength({max:6}).withMessage('لا يجب ان يكون سعر المنتج اكثر من 6 حروف'),
    check('description').notEmpty().withMessage('يجب كتابة وصف النتج').isLength({min:5}).withMessage('لا يجب ان يكون وصف المنتج اقل من 5 حروف')
    .isLength({max:250}).withMessage('لا يجب ان يكون وصف المنتج اكثر من 250 حروف'),
    check('quantity').notEmpty().withMessage('يجب كتابة كمية النتج').isLength({min:1}).withMessage('لا يجب ان يكون كمية المنتج اقل من 1 ؤقم')
    .isLength({max:50}).withMessage('لا يجب ان يكون كمية المنتج اكثر من 50 رقم').isNumeric().withMessage('يجب كتابة رقم وليست نص'),
    check('sold').notEmpty().withMessage('يجب كتابة تقيم النتج').isLength({min:1}).withMessage('لا يجب ان يكون تقيم المنتج اقل من 1 ؤقم')
    .isLength({max:50}).withMessage('لا يجب ان يكون تقيم المنتج اكثر من 50 رقم').isNumeric().withMessage('يجب كتابة رقم وليست نص'),
    check('category').notEmpty().withMessage('يجب كتابة اسم فئة النتج').isMongoId().withMessage('يجب كتابة اسم الفئة وليست نص'),
    check('subCategory').isMongoId().withMessage('يجب كتابة اسم الفئة الفرعية وليست نص'),
    check('brand').notEmpty().withMessage('يجب كتابة اسم ماركة النتج').isMongoId().withMessage('يجب كتابة اسم الفئة وليست نص'),
    validatorMidellwear
]

exports.updateProductValidator=[
    check('id').isMongoId('').withMessage('خطاء في رقم تعريف المنتج'),
    check('name').isLength({min:3}).withMessage('لا يجب ان يكون اسم المنتج اقل من 3 حروف')
    .isLength({max:10}).withMessage('لا يجب ان يكون اسم المنتج اكثر من 10 حروف'),
    check('price').isLength({min:2}).withMessage('لا يجب ان يكون سعر المنتج اقل من 2 حروف')
    .isLength({max:6}).withMessage('لا يجب ان يكون سعر المنتج اكثر من 6 حروف'),
    check('description').isLength({min:5}).withMessage('لا يجب ان يكون وصف المنتج اقل من 5 حروف')
    .isLength({max:50}).withMessage('لا يجب ان يكون وصف المنتج اكثر من 50 حروف'),
    check('quantity').isLength({min:1}).withMessage('لا يجب ان يكون كمية المنتج اقل من 1 ؤقم')
    .isLength({max:50}).withMessage('لا يجب ان يكون كمية المنتج اكثر من 50 رقم').isNumeric().withMessage('يجب كتابة رقم وليست نص'),
    check('sold').isLength({min:1}).withMessage('لا يجب ان يكون تقيم المنتج اقل من 1 ؤقم')
    .isLength({max:50}).withMessage('لا يجب ان يكون تقيم المنتج اكثر من 50 رقم').isNumeric().withMessage('يجب كتابة رقم وليست نص'),
    check('category').isMongoId().withMessage('يجب كتابة اسم الفئة وليست نص'),
    check('subCategory').isMongoId().withMessage('يجب كتابة اسم الفئة الفرعية وليست نص'),
    check('brand').isMongoId().withMessage('يجب كتابة اسم الفئة وليست نص'),
    validatorMidellwear
]
exports.deletProductValidator=[
    check('id').isMongoId('').withMessage('خطاء في رقم تعريف المنتج'),
    validatorMidellwear
]
exports.ProductValidator=[
    check('id').isMongoId('').withMessage('خطاء في رقم تعريف المنتج'),
    validatorMidellwear
]