const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("ola moises")
})
app.get('/layout',function(req,res){
    res.send("esse é o novo layout")
})
app.listen(4000,function(){
    console.log("conexão inicializada")
})