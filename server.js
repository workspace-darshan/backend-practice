const express = require('express')
const app = express()
require("dotenv").config();

app.use('/', (req, res, next) => {
    res.send({
        msg: "Hello fron backend"
    })
})

app.listen(process.env.PORT, () => {
    console.log('backend running on port 5000 =>>>')
})