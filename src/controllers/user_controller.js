const UserService = require('../services/user_service');


const userService = new UserService();

const create = async (req,res)=> {
    try{
        const response = await userService.create({
            email : req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            data:response,
            success:true,
            err:{},
            message:"User created successfully",

        })
    }catch(error){
        // console.log(error);
        return res.status(error.statusCode).json({
            data:{},
            success:false,
            err:error.explanation ,
            message:error.message,
        })
    }
}


const signIn = async(req,res) =>{
    try{
        const response = await userService.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            data:response,
            success:true,
            err:{},
            message:"Successfully signed in",
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            err:error,
            message:"something went wrong"
        })
    }
}

const isAuthenticated = async(req,res) =>{
    try{
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            data:response,
            success:true,
            err:{},
            message:"User is authenticated and token is valid"
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            err:error,
            message:"something went wrong"
        })
    }
}

const isAdmin = async function(req,res){
    try{
        const response = await userService.isAdmin(req.body.userId);
        return res.status(200).json({
            data:response,
            success:true,
            err:{},
            message:"Successfully fetched whether user is admin or not "
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success:false,
            err:error,
            message:"User is not admin"
        })
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated,
    isAdmin,

}