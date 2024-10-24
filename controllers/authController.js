const express= require('express')
const signUpModel =require('../models/signUpModel')
const collection= require('../models/signUpModel')

const app= express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));


exports.commonSignGet=(req,res)=>{
    res.render('signup')
}



exports.commonSignPost=  async (req, res) => {
    const { Username, Password } = req.body;

    try {
        // Check if username already exists
        let user = await signUpModel.findOne({ name:Username });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        
        // Create new user
        user = new signUpModel({
            name:Username,
            password:Password
        });
        

        await user.save();
        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

