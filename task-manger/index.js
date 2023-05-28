import mongoose from 'mongoose'
import app from './app.js'

(async () =>{
    try {
        await mongoose.connect('mongodb+srv://krishnan:S.krishnan2002@krishnan.q9ziubx.mongodb.net/?retryWrites=true&w=majority')
        console.log("DB CONNECTED")
        const onlistening =() =>{
            console.log("Listening on PORT 5000")
        }
        app.listen(5000,onlistening)
    }catch(error){
        console.error("error: ",error)
        throw err
    }
})()