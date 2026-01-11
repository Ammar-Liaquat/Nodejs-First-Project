const express = require("express")
const userroutes = require("./userRoutes")
const productroutes = require("./productRoutes")

const routes = express()

routes.use("/product",productroutes)
routes.use("/user",userroutes)

module.exports = routes