const express = require('express')
const app = express()
require("dotenv").config();

app.use('/', (req, res, next) => {
    res.send({
        data: [
            { id: 1, name: "darhan", age: 16 },
        ]
    })
})

app.listen(process.env.PORT, () => {
    console.log('backend running on port 5000 =>>>')
})