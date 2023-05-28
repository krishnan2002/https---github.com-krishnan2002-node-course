// //import mongoose from 'mongoose'
// const mongobd = require('mongodb')
// const MongoClient = mongobd.MongoClient 
// import app from './app.js'

// const databaseNote='task-manager'

// (async () =>{
//     try {
//         await MongoClient.connect('mongodb+srv://krishnan:S.krishnan2002@krishnan.q9ziubx.mongodb.net/?retryWrites=true&w=majority')
//         console.log("DB CONNECTED")
//         const onlistening =() =>{
//             console.log("Listening on PORT 5000")
//         }
//         // const db = client.db(databaseNote) 
//         // db.collection('users').
//         app.listen(5000,onlistening)
//     }catch(error){
//         console.error("error: ",error)
//         throw err
//     }
// })()

// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    db.collection('users').insertOne({
        name: 'Andrew',
        age: 27
    })
})