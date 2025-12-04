const {check}=require('express-validator')
const validatorMidellwear = require('../../Midellweres/ValidatorMidellwere')





exports.addUserValidator=[
    check('firstName').notEmpty().withMessage('الرجاء كتابة الاسم الاول').isLength({min:2}).withMessage('لايمكن ان يكون الاسم الاول اقل من حرفين').isLength({max:10}).withMessage('لايمكن ان يكون الاسم الاول اكثر من 10 حروف'),
    check('lastName').notEmpty().withMessage('الرجاء كتابة الاسم العائله').isLength({min:2}).withMessage('لايمكن ان يكون الاسم العائله اقل من حرفين').isLength({max:10}).withMessage('لايمكن ان يكون اسم العائله  اكثر من 10 حروف'),
    check('email').notEmpty().withMessage('الرجاء كتابة اسم البريد الالكتروني').isEmail().withMessage('يجب كتابة بريد الالكتروني').isLength({min:2}).withMessage('  لايمكن ان يكون البريد الالكتروني اقل من حرفين').isLength({max:30}).withMessage('لايمكن ان يكون البريد الالكتروني  اكثر من 10 حروف'),
    check('password').notEmpty().withMessage('الرجاء كتابة كلمة المرور').isLength({min:2}).withMessage('لايمكن ان يكون كلمة المرور  اقل من حرفين').isLength({max:10}).withMessage('لايمكن ان يكون كلمة المرور  اكثر من 10 حروف'),
    validatorMidellwear
]
exports.deleteUserValidator=[
    check('id').notEmpty().withMessage('الرجاء كتابة الرقم التعريفي ').isMongoId().withMessage('يجب كتابة Id وليست نص'),
    
    validatorMidellwear
]