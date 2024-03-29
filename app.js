require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000;

app.get("/", (req, res) => {
    res.send("This is the home page of our official website.")
})

app.get("/about", (req, res) => {
    res.send("Hello this is Sanidhya Mishra and I am the creator of this website");
})  

app.listen(process.env.PORT, () => {
    console.log("app listening on the port : " + String(process.env.PORT));
})