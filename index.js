const express = require('express')
const morgan = require('morgan')

const app = express()

const port = 3000
app.listen(port, () => {
    console.log(`Server started on port : ${port}`)
})