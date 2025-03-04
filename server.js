const express = require('express')
const app = express()

app.use('/', (req, res, next) => {
    res.send({
        msg: "Hello fron backend"
    })
})

app.listen(5000, () => {
    console.log('backend running on port 5000 =>>>')
})