const express = require('express');
require('dotenv').config();
const dbConnect = require('./config/connection');

const app = express();

const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));

// project started
app.set('view engine','ejs');

// for common route
const common =require('./routers/common')
app.use('/',common)


dbConnect().then(()=>{
    app.listen(port,()=>{
        console.log(`server running on ${port}`);
    })
}).catch((err)=>{
    console.error('Database connection Failed:',err)
});
