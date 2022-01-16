const express = require("express")
const fs = require('fs')
const morgan = require("morgan")
const app = express()
require('dotenv').config()
const cors = require("cors")
const mongoose = require('mongoose')




PORT = process.env.PORT || 5050
MONGODB_URL = process.env.MONGODB_URL

// db Connection 
mongoose
    .connect(MONGODB_URL)
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log(err))

// middleware 
app.use(cors())
app.use(morgan('dev'))

//Auto loading routes

fs.readdirSync('./routes').map((r) => app.use("/api", require(`./routes/${r}`)))




app.listen(PORT, () => console.log(`server is running in ${PORT}`))