const express= require('express')
const adminRout= express()
const authController= require('../controllers/authController')


// // login
adminRout.get('/admin',authController.adminHomeGet)

module.exports= adminRout