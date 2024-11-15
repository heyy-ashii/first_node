const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');

const dbConnect= require('./config/connection');
dbConnect()

// for common route
const common =require('./routers/commonRout')
app.use('/',common)

// for admin login
const admin= require('./routers/adminRout')
app.use('/admin',admin)

app.listen(port,()=>{
    console.log(`server started on ${port}`);
})