const validateUserAuth = (req,res,next) =>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            message:"Something went wrong",
            success:false,
            data:{},
            err:"Email or password missing in the request"
        })
    }
    next();
}

const validateIsAdminRequest = function (req,res, next){
    if(!req.body.userId){
        return res.status(400).json({
            message:"Something went wrong",
            success:false,
            data:{},
            err:"UserId missing in the request"
        })
    }
    next();
}

module.exports={
    validateUserAuth,
    validateIsAdminRequest,
}