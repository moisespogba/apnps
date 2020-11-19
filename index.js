const express = require('express')
const app = express()
var bodyparser = require('body-parser')
var cookieparser = require('cookie-parser')
var path = require('path')


app.use(cookieparser())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname,"public")))


app.get('/',function(req,res){
    res.render('index.ejs',{})
 })



app.get('/usuarios',function(req,res){
    res.render('usuarios.ejs',{usuarios:[
        {nome:'moises',email:'pogavila00@gmail.com'},
        {nome:'vanessa',email:'vanessa7@gmail.com'},
        {nome:'jessyca',email:'jessyca00@gmail.com'}
    ]  })
})

app.listen(4000,function(){
    console.log("conexão inicializada")
})