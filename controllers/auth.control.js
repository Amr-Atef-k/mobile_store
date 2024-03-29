const User = require("../models/user.model")
const asyncHandler = require("express-async-handler")
const generateToken = require("../services/jwt.services")

const authController = {
    register : asyncHandler(async (req,res)=>{
        const existUser = await User.findOne({email:req.body.email})

        if(existUser){
            return res.status(409).send({message:"email already taken"})
        }

        let newUser = new User(req.body)
        await newUser.save()
        res.status(201).send({message:"Account Created!"})
    }),
    login : asyncHandler(async (req,res)=>{
        const data = req.body
        let user = await User.findOne({email:data.email})
        
        if(!user){
            return res.status(400).send({message:"invalid email or password"})
        }

        let validpass = await user.comparePassword(data.password , user.password)
        if(!validpass){
            return res.status(400).send({message:"invalid email or password"})
        }

        let token = generateToken(user._id)
        const cookiesOptions={
            expires: new Date(
                Date.now()+ 7 * 24 * 60 * 60 * 10000
            )
        }
        res.cookie("access-token",`Barear ${token}`,cookiesOptions)
        res.send({token})
    })
}

module.exports = authController