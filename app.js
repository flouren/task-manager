const express = require('express')
const router = express.Router()
const path = require('path')
const indexRoutes = require('./router/index')

const app = express()

//env config
require('dotenv').config()



// view engine setup
app.set('views', path.join('views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join('public')));

app.use('/', indexRoutes)






const port = process.env.PORT || 3000

app.listen(port,console.log(`Server listening on ${port} ..` ))