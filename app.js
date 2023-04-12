const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose =  require('mongoose');
const PORT = 5000
const todoList = require('./routes/todo')
//middleware for json
app.use(express.json());

//dotenv config
dotenv.config({path: "./config.env"});


//middleware for routes
app.use('/todoList', todoList)
//connect database
mongoose.connect(process.env.DATABASE).then(console.log('Database Connected')).catch(error => console.log('Database not connected '));

//listen
app.listen(PORT, ()=>{
    console.log('Server Started')
})