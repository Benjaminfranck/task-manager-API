const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const ObjectID = mongodb.ObjectID
 

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error,client) => {
    if(error) {
        return console.log('Unable to connect to database')
    }
    console.log('Connected Correctly')
    const db= client.db(databaseName)

    db.collection('users').findOne({ name: 'Andrew'}, (error,user) => {
        if (error){
            return console.log ('Unable to fetch')
        }
        console.log(user)
    })
})
