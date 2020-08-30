const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


/*
users.save().then(()=> {
    console.log(users)
}).catch((error) => {
    console.log('Error!', error)
})
*/
