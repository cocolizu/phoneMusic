const express = require('express')
const fs = require('fs')
var router = express.Router()
router.get('/bg',(req,res)=>{
    var bgUrl='http://127.0.0.1:3005/img/bg.jpg'
    res.send(bgUrl)
})
router.get('/words',(req,res)=>{
    var obj = {}
    obj.id='http://127.0.0.1:3005/mp3/' + req.query.fname +'.mp3'
    var filename = __dirname.slice(0,__dirname.lastIndexOf('\\')+1) + '/public/words/' + req.query.fname + '.lrc'
    fs.exists(filename,(exists)=>{
        fs.readFile(filename,(err,data)=>{
            if(err) throw err
            obj.musicwords = data.toString()
            res.send(obj)
        })
    })
})
module.exports=router