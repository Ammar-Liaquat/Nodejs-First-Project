const express = require("express")
const connectdb = require("./config/db")
const routes = require("./routes/Routes")
const dotenv = require("dotenv")

dotenv.config({quiet:true})
connectdb()

const app = express()
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Welcome")
}) 

app.use("/api",routes)

const port = process.env.PORT || 3000

app.listen(port, ()=>{

    console.log(`server is running ${port}`);
    
})