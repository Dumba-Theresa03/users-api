const express =require("express")
const userRoute = require("./routes/usersRoutes")
const path = require("path")

const app = express()

//middlewires
app.use(express.json());

app.use(userRoute)

//home route
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/pages/index.html"))
})

app.get("/*",(req, res)=>{
    res.status(400).sendFile(path.join(__dirname + "/pages/404.html"))
})

const PORT = 4000;


app.listen(PORT, ()=>{
console.log("SERVER IS UP")

})