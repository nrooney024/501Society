const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
PORT = 80


let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'sample_mflix',
    collection



app.listen(process.env.PORT || PORT, function() {
    console.log(`Listening...`)
})