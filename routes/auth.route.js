const express = require("express")
const router = express.Router()
const authControl = require("../controllers/auth.control")
const {registrationSchema} = require("../validations/auth.validate") 
// const {va} = require("joi")
const validate = require("../services/validate.service")

router.post("/register" , validate(registrationSchema) , authControl.register)

module.exports = router