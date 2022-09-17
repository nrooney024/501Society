const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config({path: './config/.env'})
const connectDB = require('./config/database')
PORT = 80

const homepageRoutes = require('./routes/homepage-routes')
const learningStacksRoutes = require('./routes/learning-stacks-routes')
const learningStackPageRoutes = require('./routes/learning-stack-page-routes')

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

// Routes
app.use('/homepage', homepageRoutes)
app.use('/learning-stacks', learningStacksRoutes)
app.use('/learning-stack-page', learningStackPageRoutes)


app.listen(process.env.PORT || PORT, function() {
    console.log(`Listening...`)})
