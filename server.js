const express =require("express");
const app=express();
var port =3000;
app.use(express.static("public"));
app.listen(3000, function(){
    console.log("Server is working on port 3000");
});