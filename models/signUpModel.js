const { required } = require('joi')
const mongoose = require('mongoose')

// loginSchema
const signUpSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    } ,
    role:{
        type:String,
        required:true,
        default:'user'
    }
})

// create Collection

const collection = new mongoose.model('user',signUpSchema)



module.exports=collection