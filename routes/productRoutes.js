const express = require("express")
const { createproducts, patchproducts , getproducts ,delproducts } = require("../controllers/productsControllers")
const routes = express()

routes.use(express.json())

routes.post("/", createproducts)
routes.get("/", getproducts)
routes.patch("/:id", patchproducts)
routes.delete("/:id", delproducts)

module.exports = routes