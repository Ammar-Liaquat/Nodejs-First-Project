const express = require("express")
const userroutes = require("./userRoutes")
const productroutes = require("./productRoutes")
const clothroutes = require("./clothsRoutes")

const routes = express()

routes.use("/product",productroutes)
routes.use("/user",userroutes)
routes.use("/cloth",clothroutes)

module.exports = routes