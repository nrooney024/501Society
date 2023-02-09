const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config({path: './config/.env'})
const connectDB = require('./config/database')
const flash = require('express-flash')
const logger = require('morgan')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const methodOverride = require("method-override");

const mainRoutes = require('./routes/main-routes')
const learningStacksRoutes = require('./routes/learning-stacks-routes')
const learningStackPageRoutes = require('./routes/learning-stack-page-routes')
const authRoutes = require('./routes/auth')

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

// Static folder
app.use(express.static(path.join(__dirname, 'public')))


//Use forms for put / delete
app.use(methodOverride("_method"));

// Sessions
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        client: mongoose.connection.getClient()
      }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// Routes
app.use('/', mainRoutes)
app.use('/learning-stacks', learningStacksRoutes)
app.use('/learning-stack-page', learningStackPageRoutes)
app.use('/auth', authRoutes)


app.listen(process.env.PORT || PORT, function() {
    console.log(`Listening...`)})
