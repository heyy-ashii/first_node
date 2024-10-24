
const express = require('express')
const commonRouter= express()
const authController= require('../controllers/authController')



commonRouter.get('/signup',authController.commonSignGet);
// commonRouter.post('/',authController.commonSignPost);
commonRouter.post('/signup',authController.commonSignPost);


module.exports=commonRouter