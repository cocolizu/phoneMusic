const express = require('express')
const cors = require('cors')
var imgResource = require('./router/imgResource.js')
var app = express()
app.listen(3005)
app.use(express.static(__dirname+'/public'))
app.use(cors({
    origin:'*',
    credentials:true
}))
app.use('/image',imgResource)
