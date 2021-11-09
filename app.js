const express = require('express')
const router = express.Router()
const path = require('path')
const indexRoutes = require('./router/index')
const tasks = require('./router/tasks')
const connectDB = require('./db/connect')

const app = express()

//env config
require('dotenv').config()



// view engine setup
app.set('views', path.join('views'));
app.set('view engine', 'ejs');

// middleware
app.use(express.json())
app.use(express.static(path.join('public')));


//routes
app.use('/', indexRoutes)
app.use('/api/v1/tasks', tasks)





const port = process.env.PORT || 3000

const start = async () => {
    const url = process.env.DB
    try {
        await connectDB(url)
        app.listen(port,console.log(`Server listening on ${port} ..` ))
    } catch (error) {
        console.log(error);
    }
}
start()

