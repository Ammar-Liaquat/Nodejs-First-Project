const express = require("express")
const { getuser, createuser, patchuser , deluser } = require("../controllers/userControllers")
const routes = express()

routes.use(express.json())

routes.post("/",createuser)
routes.get("/",getuser)
routes.patch("/:id",patchuser)
routes.delete("/:id", deluser)



module.exports = routes