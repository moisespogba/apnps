const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("ola moises")
})
app.get('/mensagem',function(req,res){
    res.send("essa mensagem é automatica")
})
app.get('/sobre',function(req,res){
    res.send("esta pagina esta sendo desenvolvida por moises")
})
app.listen(4000,function(){
    console.log("conexão inicializada")
})