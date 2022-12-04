const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

const app  = express();

const users = require('./routes/users')

async function connectAtlas(){
    await dbConnection()
}

connectAtlas()
app.use(express.json())

app.use('/usuario',users)


app.listen(process.env.PORT);