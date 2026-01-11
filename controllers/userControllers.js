const Users = require("../models/userModels")

const createuser = async(req,res)=>{

    try {
            const {name,email,password} = req.body
    const user = await Users.create({name,email,password})

   res.status(201).json({
    message: "User create successfully",
    code: 201,
    data: user
   })
    } catch (error) {
        res.status(500).json({
            message: "User not create",
            code: 500,
            error:error.message
        })
    }

}

const getuser = async (req,res)=>{

    try {
        
        const user = await Users.find()
        res.status(200).json({
            message: "user fetched successfully",
            code: 200,
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: "user not fetched",
            code:500,
            error:error.message
        })
        
    }

}

const patchuser = async (req,res)=>{

    try {
        
        const user = await Users.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:req.body}
        )
        res.status(200).json({
            message:"User Updated Successfully",
            code:200,
            data:user
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal Error",
            code:500
        })
    }
}

    const deluser = async (req,res)=>{

        try {
              const user = await Users.findByIdAndDelete(
            {_id:req.params.id})
                res.status(200).json({
            message:"User Delete Succesfully",
            code:200,
            data: user
        })
        } catch (error) {
            res.status(500).json({
                message:"Internal Server Error",
                code:500
            })
        }
      
        }
    

module.exports = {
    createuser,
    getuser,
    patchuser,
    deluser
}