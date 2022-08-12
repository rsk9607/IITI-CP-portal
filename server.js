const express =require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://sajan123:123@cluster0.cve5f8y.mongodb.net/cp?retryWrites=true&w=majority");
var port =3000;
app.use(express.static("public"));

app.listen(3000, function(){
    console.log("Server is working on port 3000");
});
const user_schema = new mongoose.Schema({
    username: String,
    useremail: String,
    userpassword: String,
    passrepeat: String,
});
const User = mongoose.model("Users",user_schema);
app.post("/",function(req,res){
    const okay=new User(req.body);
    okay.save();
    res.sendFile(__dirname +"/public/index.html")
});