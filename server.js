const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
PORT = 80


let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'five-zero-one-society',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log(`Connected to Database`)
        db = client.db(dbName)
        collection = db.collection('five-zero-one-society')
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

// GET Homepage
app.get('/', async (request, response) => {
    try {
        response.render('index.ejs')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
})

// GET Learning Stack Page

/*
app.get('/learning-stack-page.ejs', async (request, response) => {
    try {
        response.render('learning-stack-page.ejs')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
})

// GET Learning Stacks
app.get('/learning-stacks.ejs', async (request, response) => {
    try {
        response.render('learning-stacks.ejs')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
})
*/
app.listen(process.env.PORT || PORT, function() {
    console.log(`Listening...`)})
