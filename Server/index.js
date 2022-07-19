'use strict'
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const calorieRoute = require("./routes/calorie.routes")
const userRoute = require("./routes/user.routes");

require('dotenv').config();


const app = express();
app.use(cors())
app.use(express.json());

const port = process.env.PORT ||5051;
const db = process.env.DB_URL;




//app.use('/calories',calorieRoute);
//app.use('/user',userRoute);


mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(()=>{
        app.listen(port,()=>{
        console.log(`Server is running at port ${port}`)
        })
    }).catch(e=>{
        console.log('Error while connecting to the db');
})

