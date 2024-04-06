const express=require ("express")
const path=require("path")
const bcrypt=require("bcrypt")
const session=require("express-session")
const app=express()
require('dotenv').config()
const passwordd="monkey"

    const hash= bcrypt.hash(passwordd,12)



const user={
    username:"kshitiz.singh",
    password:hash
}

const views=path.join(__dirname,"/views")
const public=path.join(__dirname,"/public")

app.use(express.static(public))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({secret:"notagoodsecret"}))

app.set("view engine","ejs")
app.set("views",views)



app.get("/",(req,res)=>{
    res.render("login.ejs")
})
app.post("/login",async(req,res)=>{
    console.log(req.body.password)
    let pass=await user.password
    console.log(pass)
console.log(req.body.email)
    if(user.username==req.body.email){
        const compare=await bcrypt.compare(req.body.password,pass)
        console.log(compare)
        if(compare){
            req.session.user_id=user.username
            res.redirect("/dashboard")
        }
        else{
            res.send("try again")
        }
    }
    else{
        res.send("try again")
    }
   
})











app.get("/dashboard",async(req,res)=>{
    if(req.session.user_id){
        res.render("home.ejs")
    }
    else{
        res.redirect("/login")
    }
})
app.get("/ec2",(req,res)=>{
    if(req.session.user_id){
        res.render("ec2.ejs")
    }
    else{
        res.redirect("/login")
    }
})
app.get("/alarms",(req,res)=>{
    
    if(req.session.user_id){
        res.render("alarms.ejs")
    }
    else{
        res.redirect("/login")
    }
})
app.get("/cost",(req,res)=>{

    if(req.session.user_id){
        res.render("cost.ejs")
    }
    else{
        res.redirect("/login")
    }
})
app.post("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/login")
})








app.listen("80",()=>{
    console.log("App is up on port 80")
})