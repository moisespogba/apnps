const express = require('express')
const app = express()
var bodyparser = require('body-parser')
var cookieparser = require('cookie-parser')
var path = require('path')
var Usuario = require('./model/usuario')


app.use(cookieparser())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname,"public")))


app.get('/',function(req,res){
    res.render('index.ejs',{})
 })




app.get('/add',function(req,res){
    res.render('adiciona.ejs')
})


app.post('/add',function(req,res){
  var usuario = new Usuario({
      nome: req.body.txtNome,
      email: req.body.Email,
      senha: req.body.txtSenha,
      foto: req.body.txtFoto

  })
  usuario.save(function(err){
      if(err){
          console.log(err)
      }else{
          res.redirect('/');
      }
  })
})

app.listen(4000,function(){
    console.log("conexão inicializada")
})