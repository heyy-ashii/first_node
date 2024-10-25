const mongoose = require('mongoose')

// loginSchema
const signUpSchema = mongoose.Schema({
    name:{
        type:'String',
        required:true
    },
    password:{
        type:'String',
        required:true
    }

    
})

// create Collection

const collection = new mongoose.model('user',signUpSchema)
console.log('hi');


module.exports=collection