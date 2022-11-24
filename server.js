const express = require("express")
const app = express()


const users = []

app.get("/",(req,res)=>{
    res.render('index.ejs')
})
app.get("/login",(req,res)=>{
    res.render('login.ejs')

})

app.get("/register",(req,res)=>{
    res.render('register.ejs')
})

//post to login

app.post("/",(req,res)=>{
    res.render("index.ejs")

})

//post for register

app.post("/login",(req,res)=>{

    try{
        users.push({
            id:Date.now().toString(),
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        res.redirect("/login")
    }
        catch{
            res.redirect("/login")
    }

})



app.listen(3000,console.log("http://localhost:3000"))