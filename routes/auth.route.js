const express = require("express")
const router = express.Router()
const authControl = require("../controllers/auth.control")
const {registrationSchema, loginSchema} = require("../validations/auth.validate") 

const validate = require("../services/validate.service")

router.post("/register" , validate(registrationSchema) , authControl.register)
router.post("/login" , validate(loginSchema) , authControl.login)

module.exports = router