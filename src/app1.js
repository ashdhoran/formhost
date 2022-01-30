const express = require("express");
const app= express();
const path = require("path");
const hbs = require("hbs");
require("./db/conn");

const Register = require("./models/registers");
const Detail = require("./models/details");
const { json }= require("express");
    


const static_path= path.join(__dirname,"../public");
const template_path= path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partial_path);

console.log(static_path);


app.get("/",(req,res)=>{
    res.render("index")
    console.log("my page is loading");
});

app.get("/register",(req,res)=>{
    res.render("register")
})

//create new user in our database

app.post("/register",async(req,res)=>{
    try{
        const registerEmployee =new Register({
            username:req.body.username,
            password:req.body.password
        })
        const registered = await registerEmployee.save();
        
        res.status(201).render("index")

    }catch(error){
        res.status(400).send(error);
    }
})

app.get("/myform",(req,res)=>{
    res.render("myform")
    console.log("my page is loading");
}); 

app.post("/myform",async(req,res)=>{
    try{
        const detailEmployee =new Detail({
            myname:req.body.myname,
            DOB:req.body.DOB,
            ypass:req.body.ypass,
            branch:req.body.branch,
            company:req.body.company,
            skill:req.body.skill
        })
        const detailed = await detailEmployee.save();
        
        res.status(201).render("index")

    }catch(error){
        res.status(400).send(error);
    }
})


app.listen(8000, () => {
    console.log("LISTENING ON PORT 8000")
})