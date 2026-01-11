const express = require("express")
const {createcloths, getcloths, patchcloths,delcloths} = require("../controllers/clothsControllers")
const routes = express()


routes.use(express.json())

routes.post("/", createcloths)
routes.get("/", getcloths)
routes.patch("/:id", patchcloths)
routes.delete("/:id", delcloths)

module.exports = routes

