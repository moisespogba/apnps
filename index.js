const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("ola mundo")
})
app.listen(4000,function(){
    console.log("conexão inicializada na porta 4000")
})