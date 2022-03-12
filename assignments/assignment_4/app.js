const express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
const user = require("./user")
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/assignment_4');
const port = 3000;
const app = express();
app.use(methodOverride('_method'))

app.use(bodyParser())
app.set('view engine','ejs')
app.set("views",'./views');

app.get("/",async(req,res)=>{
    // write code to fetch the data
    const users = await user.find()
    res.status(200).render('index',{users});
})
app.get("/form",(req,res)=>{
    res.status(200).render('form')
})
app.post("/user/add",async(req,res)=>{
    const {name,email} = req.body;
    await user.create({
        name,
        email
    })
    res.redirect("/")

})
app.put("/user/:id/select",async(req,res)=>{
    await user.updateOne({_id: req.params.id},{selected:true})
   
res.redirect("/")
})
app.delete("/user/:id/delete",async(req,res)=>{
    await user.deleteOne({_id:req.params.id},{selected:true})
   
res.redirect("/")
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})