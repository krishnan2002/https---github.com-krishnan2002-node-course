const express = require('express')
const app = express() 
const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }))


app.use('/',(req,res,next) =>{
    res.send('<h1>Add product</h1><form action="/store-product" method="POST"><input type="text" name="title"/></form><button type="submit" value="Submit">Submit</button>')
})
app.use('/store-product',(req,res,next)=>{
    res.send(req.body)
})
app.listen(3000)