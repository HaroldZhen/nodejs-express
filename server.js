require('dotenv').config()
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const headers = require('./crosHeader')
const postsRouter = require('./routers/api/posts')
const connectDB = require('./config/connectMongoose')
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


app.get('/', function(req,res) {
    res.status(200).json({
        statue: 'success'
    })
})

app.use(headers)

app.use('/posts', postsRouter)


const port = process.env.PORT || '8080'
app.listen(port)
