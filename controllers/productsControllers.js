const productdata = require("../models/productsModels")

const createproducts = async (req,res)=>{

    try {
       const {name,price,category} = req.body

       const product = await productdata.create({name,price,category})

       res.status(201).json({
        message:"Product Create Successfully",
        code:201,
        data:product
       })
       

    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
            code:500
        })
    }
}

const getproducts = async (req,res)=>{

    try {

       const product = await productdata.find()

       res.status(201).json({
        message:"Product Fetched Successfully",
        code:201,
        data:product
       })
       

    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
            code:500
        })
    }
}

const patchproducts = async (req,res)=>{

    try {

       const product = await productdata.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:req.body}
       
    )

       res.status(200).json({
        message:"Product Update Successfully",
        code:200,
        data:product
       })
       

    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
            code:500
        })
    }
}

const delproducts = async (req,res)=>{

    try {

       const product = await productdata.findByIdAndDelete(req.params.id)

       res.status(200).json({
        message:"Product Delete Successfully",
        code:200,
        data:product
       })
       

    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
            code:500
        })
    }
}

module.exports = {
    createproducts,
    getproducts,
    patchproducts,
    delproducts,
}