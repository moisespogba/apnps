const mongoose = require('mongoose')
const uri = "mongodb://locall\host:27017/apnp"

mongoose.connect(uri,{ useNewUrlParser: true,useUnifiedTopology:true })

module.exports = mongoose