//dotenv
require('dotenv').config();
//connect DB
const { connectDB } = require('./configs/db')

connectDB();

const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/authRoute');

const app = express();

//Cors
app.use(cors());

//Body Parser
app.use(express.json());

// Mount the route
app.use('/api/v1/auth', authRoute);


app.get('/', (req,res,next) => {
    res.json('first step');
});


const port = process.env.APP_PORT;

app.listen(port, () => {
    console.log(`Server listen at port: ${port}`);
})