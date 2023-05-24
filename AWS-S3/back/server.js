import express from 'express'

const app = express()

app.use(express.static('front'))
app.get('s3Url',(req,res) =>{
    
})
app.listen(8080, () => console.log("Listening on port 8080"))