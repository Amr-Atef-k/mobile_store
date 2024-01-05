const Joi = require("joi")
const passwordExpression = / ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$ /

module.exports={
    registrationSchema: Joi.object().keys({
        name:Joi.string().min(3).max(30).required().messages({
            "any.required":"Name is required"
        }),
        email:Joi.string().email().min(3).max(30).required().messages({
            "any.required":"email is required",
            "string.email":"Invalid email"
        }),
        password:Joi.string().regex(passwordExpression).required().messages({
            "any.required":"password is required"
        }),
        address:Joi.string().min(3).max(30).required().messages({
            "any.required":"address is required"
        }),
        nationalId:Joi.number().required().messages({
            "any.required":"nationalId is required"
        }),
        phone:Joi.string().required().messages({
            "any.required":"phone is required"
        }),

    })
}