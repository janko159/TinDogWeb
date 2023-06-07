const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render(__dirname + "/index.html");
})
  

app.listen(3000, (req,res)=>{
    console.log("Server is running on port 3000");
})