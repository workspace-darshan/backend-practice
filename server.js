const express = require('express')
const app = express()
require("dotenv").config();

app.use('/', (req, res, next) => {
    res.send({
        msg: "This is auto Depolyment using CI/CD pippelines ....great Darshan !!"
    })
})

app.listen(process.env.PORT, () => {
    console.log('backend running on port 5000 =>>>')
})