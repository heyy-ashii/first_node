const mongoose = require('mongoose')


async function dbConnect(){
    await mongoose.connect(process.env.MONGO_URL,{
        dbName:'FirstNode'
    })
    .then(()=>{
        console.log('MongoDb Connected Successfully')
    })
    .catch((err)=>{
        console.log('Error When Connecting MongoDb',err)
    })
}


module.exports= dbConnect