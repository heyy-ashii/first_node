
const express = require('express')
const commonRouter= express()
const authController= require('../controllers/authController')


// sign up
commonRouter.get('/signup',authController.commonSignGet);
commonRouter.post('/signup',authController.commonSignPost);

// login
commonRouter.get('/login',authController.commonLoginGet);
commonRouter.post('/login',authController.commonLoginPost);

// home
 commonRouter.get('/home',authController.commonHomeGet)

console.log('hi');

module.exports=commonRouter