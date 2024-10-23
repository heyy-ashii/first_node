const mongoose = require("mongoose")

async function dbConnect() {
    await mongoose.connect(process.env.MONGOURL,{
      dbName: 'FirstNode'
    })
    .then(()=>{
        console.log('MongoDb Connecting Successfully')

    })
    .catch((err)=>{
        console.log('Error When Connecting MongoDb',err)

    })
}
module.exports=dbConnect