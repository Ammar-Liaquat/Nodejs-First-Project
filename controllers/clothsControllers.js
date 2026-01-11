const cloths = require("../models/clothsModels")

const createcloths = async (req,res) =>{


    try {
          const {name,price,category}= req.body

    const cloth = await cloths.create({name,price,category})

    res.status(201).json({
        message:"Cloth Created successfully",
        code: 201,
        data:cloth
    })
    } catch (error) {
        
        res.status(500).json({
            message:"internal server error",
            code:500,
            error:error.message
        })
    }
  

}

const getcloths = async (req,res) =>{

    try {
         const cloth = await cloths.find()
    res.status(200).json({
        message:"cloths fetched successfully",
        code:200,
        data:cloth
    })
    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            code:500,
            error:error.message
            
        })
    }
   
}

const patchcloths = async (req,res) =>{

    try {
         const cloth = await cloths.findByIdAndUpdate({_id:req.params.id},{$set:req.body})
    res.status(200).json({
        message:"cloths patched successfully",
        code:200,
        data:cloth
    })
    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            code:500,
            error:error.message
            
        })

    }
   
}

const delcloths = async (req,res) =>{

    try {
         const cloth = await cloths.findByIdAndDelete({_id:req.params.id})
    res.status(200).json({
        message:"cloths delete successfully",
        code:200,
        data:cloth
    })
    } catch (error) {
        res.status(500).json({
            message:"internal server error",
            code:500,
            error:error.message
            
        })
    }
   
}
module.exports ={
    createcloths,
    getcloths,
    patchcloths,
    delcloths
}