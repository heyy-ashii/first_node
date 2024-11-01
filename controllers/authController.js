
const signUpModel =require('../models/signUpModel')
const bcrypt= require('bcrypt')

// SignUu section

exports.commonSignGet=(req,res)=>{
    res.render('common/signup')
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
    res.render('common/login')
}

// Login Section
exports.commonLoginPost = async (req, res) => {
    try {
        const { Username, Password } = req.body;

        // First, check if the user exists
        const usercheck = await signUpModel.findOne({ name: Username });
        if (!usercheck) {
            return res.json('Username not found👾');
        }

        // Check if user has admin role
        const adminCheck = await signUpModel.findOne({ name: Username, role: 'admin' });
        if (adminCheck) {
            return res.redirect("/admin/admin");
        }

        // Verify the password
        const isPasswordMatch = await bcrypt.compare(Password, usercheck.password);
        if (isPasswordMatch) {
            res.redirect("/home");
            console.log('hello');
        } else {
            res.json('Incorrect password');
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).json('Server Error');
    }
};



exports.commonHomeGet=function(req,res){
    res.render('user/home')
}
exports.adminHomeGet=(req,res)=>{
    res.render('admin/admin')
}



