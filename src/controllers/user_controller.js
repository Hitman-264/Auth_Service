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
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            err:error,
            message:"User not created",
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

module.exports = {
    create,
    signIn,
}