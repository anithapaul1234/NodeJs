const Express=require('express')
var app=new Express()
app.get('/',(req,res)=>{
    res.send("welcome")
})
app.get('/home',(req,res)=>{
    res.send("welcome to my home")
})
app.listen(3000)