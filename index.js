require("dotenv").config()
const express = require('express')
const cors = require('cors')
const { todoRouter } = require("./routes/todo.js")

const app = express()
app.use(cors({
    origin: 'https://todo-client-3ii6.onrender.com'
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/", todoRouter)

const port = process.env.PORT
app.listen(port)