//this function validates any schema's data
const validate = (schema)=>{
    return(req,res,next)=>{
        const {error} = schema.validate(req.body,{abortEarly:false})
        if(error){
            let errMsg = error.details.map((err)=>{
                return {message: err.message , path : err.path}
            }).message
            res.status(400).send(errMsg)
        }
        next()

        console.log(error)
    }
}

module.exports = validate