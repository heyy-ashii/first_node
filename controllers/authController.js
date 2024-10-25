
const signUpModel =require('../models/signUpModel')
const collection= require('../models/signUpModel')
const bcrypt= require('bcrypt')


// SignUu section

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
        
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(Password, saltRounds);

        
        // Create new user
        user = new signUpModel({
            name:Username,
            password: hashedPassword
        });
          
    
        await user.save();
        res.redirect('/login')

    } catch (err) {
        console.error(err.message);
        res.status(500).json('Server Error');
    }
  
}
// login Selection
exports.commonLoginGet=(req,res)=>{
    res.render('login')
}


exports.commonLoginPost= async (req,res)=>{
    try{
        const loginData =req.body 
        const {Username,Password}=loginData     

        const usercheck= await signUpModel.findOne({name: Username})
        if(!usercheck){
            res.json('Username not found👾')
        }
        
        const isPasswordMatch= await bcrypt.compare(Password,usercheck.password)
        if(isPasswordMatch){
           res.redirect("/home")
           console.log('hello')
        }
    }catch(err){
        console.error(err.message);
        res.status(500).json('Server👩🏻‍💻👩🏻‍💻👩🏻‍💻Error');
    }

}
exports.commonHomeGet=function(req,res){
    res.render('home')
}

