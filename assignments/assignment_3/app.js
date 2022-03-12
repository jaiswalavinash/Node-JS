const express = require('express');
const app = express();
const path = require('path')
const faker = require('faker')
var bodyParser = require('body-parser')
const port = 80;

app.use(bodyParser())
app.set('view engine','ejs')
app.set("views",path.join(__dirname,'views'));
const users = [];
for (let i=0; i<9;i++){
    users.push({
        name:faker.name.findName(),
        email:faker.internet.email()
    })
}
console.log(users)
app.get("/",(req,res)=>{
    res.status(200).render('index',{users});
})
app.get("/form",(req,res)=>{
    res.status(200).render('form')
})
app.post("/user/add",(req,res)=>{
    users.push({
        name:req.body.name,
        email:req.body.email
    })
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})