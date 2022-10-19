const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("El servidor esta corriendo en el puerto" + port)
} )


app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))

})

app.get("/registro", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))

})

app.get("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))

})

app.post("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))

})